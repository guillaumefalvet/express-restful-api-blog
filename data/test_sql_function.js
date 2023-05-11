const { Pool } = require('pg');

const client = new Pool({
  database: 'oblog',
});
async function insertDB() {
  const data1 = {
    label: 'sssasasasas',
    route: '/sssssasas',
  };
  const preparedQuerry1 = {
    text: 'SELECT * FROM create_category($1)',
    values: [JSON.stringify(data1)],

  };
  const querry1 = await client.query(preparedQuerry1);

  console.log(querry1.rows);

  const data2 = {
    slug: 'python-is-a-cool-language',
    title: 'is python really THAT cool ',
    excerpt: '<p>is python really THAT cool </p>',
    content: 'lorem*10',
    category_id: 3,
  };
  const preparedQuerry2 = {
    text: 'SELECT * FROM create_post($1)',
    values: [JSON.stringify(data2)],

  };
  const querry2 = await client.query(preparedQuerry2);
  console.log(querry2.rows);
}
client.connect().then(() => {
  insertDB();
});
