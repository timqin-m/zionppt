import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const GRAPHQL_URL = 'https://zion-app.functorz.com/zero/PO76RBe90gY/api/graphql-v2';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function gql(query, variables) {
  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(variables ? { query, variables } : { query }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
  const json = await res.json();
  if (json.errors?.length) throw new Error(json.errors[0].message);
  return json.data;
}

const assetsDir = './public/assets';
const files = fs.readdirSync(assetsDir);

console.log(`Found ${files.length} files in ${assetsDir}:`, files);

const SUFFIX_BY_EXT = {
  '.png': 'PNG',
  '.jpeg': 'JPEG',
  '.jpg': 'JPEG',
  '.webp': 'WEBP',
  '.gif': 'GIF'
};

let results = {};
const resultsPath = './scripts/uploaded-assets.json';
if (fs.existsSync(resultsPath)) {
  try {
    results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
    console.log('Loaded existing uploaded assets:', Object.keys(results));
  } catch (e) {
    console.warn('Failed to parse existing uploaded assets, starting fresh.');
  }
}

for (const file of files) {
  if (file === '.DS_Store') continue;
  if (results[file]) {
    console.log(`File ${file} already successfully uploaded, skipping.`);
    continue;
  }

  const filePath = path.join(assetsDir, file);
  const ext = path.extname(file).toLowerCase();
  const suffix = SUFFIX_BY_EXT[ext];
  if (!suffix) {
    console.warn(`Unsupported file type for ${file}, skipping.`);
    continue;
  }

  console.log(`Processing ${file}...`);
  const fileBuffer = fs.readFileSync(filePath);
  
  // Calculate MD5 and convert to Base64
  const md5Hash = crypto.createHash('md5').update(fileBuffer).digest();
  const md5Base64 = md5Hash.toString('base64');
  
  try {
    // Step 1: Get presigned URL
    const mutation = `
      mutation {
        imagePresignedUrl(imgMd5Base64: "${md5Base64}", imageSuffix: ${suffix}, acl: PUBLIC_READ) {
          imageId
          uploadUrl
          uploadHeaders
        }
      }
    `;
    const data = await gql(mutation);
    const { imageId, uploadUrl, uploadHeaders } = data.imagePresignedUrl;
    console.log(`  Got presigned URL. Image ID: ${imageId}`);

    // Step 2: Upload raw buffer to OSS
    const headers = {};
    for (const [k, v] of Object.entries(uploadHeaders)) {
      headers[k] = v;
    }
    const uploadRes = await fetch(uploadUrl, {
      method: 'PUT',
      headers,
      body: fileBuffer,
    });
    if (!uploadRes.ok) {
      throw new Error(`Upload to OSS failed: HTTP ${uploadRes.status}`);
    }
    console.log(`  Uploaded to OSS successfully.`);

    const imageUrl = uploadUrl.split('?')[0];
    console.log(`  Zion OSS Public URL: ${imageUrl}`);
    results[file] = { imageId, url: imageUrl };
    
    // Save results progressively
    fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));

    // Wait a bit to avoid triggering 429 Rate Limit
    await sleep(2000);
  } catch (err) {
    console.error(`Error processing ${file}:`, err);
    // If rate-limited, sleep longer
    if (err.message.includes('429')) {
      console.log('Rate limit hit. Sleeping 5 seconds...');
      await sleep(5000);
    }
  }
}

console.log('\n=== UPLOAD COMPLETED ===');
console.log(JSON.stringify(results, null, 2));
fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
