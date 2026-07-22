// 后端连通性测试（只读，不写数据，避免脏数据）
// 用法：node scripts/test-backend.mjs
const GRAPHQL_URL = 'https://zion-app.functorz.com/zero/PO76RBe90gY/api/graphql-v2';

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

const meals = await gql(
  'query { meal_record(order_by: { id: desc }, limit: 3) { id food_name calories meal_type created_at } }'
);
console.log(`✓ meal_record 最新 3 行（共读到 ${meals.meal_record.length} 行）:`);
for (const r of meals.meal_record) {
  console.log(`  #${r.id} [${r.meal_type}] ${r.food_name} — ${r.calories} kcal @ ${r.created_at}`);
}

const msgs = await gql('query { live_message(limit: 200) { id } }');
console.log(`✓ live_message 当前共 ${msgs.live_message.length} 条弹幕（limit 200 内）`);

console.log('✓ 后端连通正常（只读测试，未写入任何数据）');
