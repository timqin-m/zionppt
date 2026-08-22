import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

const GRAPHQL_URL = 'https://zion-app.functorz.com/zero/PO76RBe90gY/api/graphql-v2';

async function gql(query, variables) {
  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(variables ? { query, variables } : { query }),
  });
  const json = await res.json();
  if (json.errors?.length) throw new Error(json.errors[0].message);
  return json.data;
}

const SUFFIX_BY_EXT = { webp: 'WEBP', jpg: 'JPEG', jpeg: 'JPEG', png: 'PNG', gif: 'GIF' };

function md5Base64(buf) {
  const hex = createHash('md5').update(buf).digest('hex');
  return Buffer.from(hex.match(/\w{2}/g).map((h) => String.fromCharCode(parseInt(h, 16))).join(''), 'binary').toString('base64');
}

async function uploadImage(filePath) {
  const buf = readFileSync(filePath);
  const ext = filePath.split('.').pop().toLowerCase();
  const suffix = SUFFIX_BY_EXT[ext];
  if (!suffix) throw new Error(`unsupported ext: ${ext} (${filePath})`);

  const { imagePresignedUrl } = await gql(
    `mutation { imagePresignedUrl(imgMd5Base64: "${md5Base64(buf)}", imageSuffix: ${suffix}, acl: PUBLIC_READ) { imageId uploadUrl uploadHeaders } }`
  );

  const res = await fetch(imagePresignedUrl.uploadUrl, {
    method: 'PUT',
    headers: imagePresignedUrl.uploadHeaders,
    body: buf,
  });
  if (!res.ok) throw new Error(`PUT failed HTTP ${res.status}`);

  return imagePresignedUrl.imageId;
}

const ASSETS = [
  { name: '小卡册封面', file: 'public/assets/case-xiaokace.webp' },
  { name: 'GOO活动封面', file: 'public/assets/case-goo.webp' },
  { name: 'shikilab封面', file: 'public/assets/case-shikilab.jpg' },
  { name: 'shikilab二维码', file: 'public/assets/case-shikilab-qr.png' },
  { name: '更多案例二维码', file: 'public/assets/more-cases-qr.png' },
  { name: 'Zion黑色logo', file: 'public/assets/zion-logo-black.png' },
  { name: 'Zion白色logo', file: 'public/assets/zion-logo-white.png' },
];

for (const a of ASSETS) {
  const imageId = await uploadImage(a.file);
  const { insert_ppt_asset_one } = await gql(
    `mutation ($o: ppt_asset_insert_input!) { insert_ppt_asset_one(object: $o) { id name image { id url } } }`,
    { o: { name: a.name, image_id: Number(imageId) } }
  );
  console.log(`✓ ${a.name} → id=${insert_ppt_asset_one.id} url=${insert_ppt_asset_one.image?.url}`);
}