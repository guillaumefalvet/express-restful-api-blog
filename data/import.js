require('dotenv').config();
const { Client } = require('pg');
const categoryData = require('./categories.json');
const postData = require('./posts.json');

const categoryList = [];
async function seeding() {
  const client = new Client();
  client.connect();
  const dataMapper = {
    async seedingPost(slug, title, excerpt, content, categoryId) {
      const preparedQuery = {
        text: `INSERT INTO "post" ("slug", "title", "excerpt", "content", "category_id") VALUES ('${slug}','${title}','${excerpt}','${content}','${categoryId}');`,
      };
      await client.query(preparedQuery);
    },
    async seedingCategory(obj) {
      const preparedQuery = {
        text: `INSERT INTO "category" ("label", "route") VALUES ('${obj.label}', '${obj.route}');`,
      };
      await client.query(preparedQuery);
    },
  };
  // CATEGORY PART
  const promiseListCategory = [];
  let id = 1;
  // FOR LOOP ON THE CATEGORY DATA, THEN PUSHING INTO promiseLIST
  categoryData.forEach((category) => {
    // TODO ne pas push la première category
    promiseListCategory.push(dataMapper.seedingCategory(category));
    categoryList.push({ id, label: category.label, route: category.route });
    id += 1;
    // console.log(`${category.label} pushed into promise list`);
  });
  // SEEDING IN THE DATABASE
  await Promise.all(promiseListCategory);

  // POST PART
  const promiseListParts = [];
  postData.forEach((post) => {
    const result = categoryList.find((element) => element.label === post.category);
    // REPLACE \"" and " by `in the excerpt section
    function replaceSingleQuotes(str) {
      return str.replace(/'/g, '`').replace(/\\"/g, '`');
    }
    const backTickContent = replaceSingleQuotes(post.excerpt);
    promiseListParts.push(dataMapper.seedingPost(
      post.slug,
      post.title,
      backTickContent,
      post.content,
      result.id,
    ));
    console.log(`${result.id} : ${post.slug}`);
  });
  // SEEDING IN THE DATABASE
  await Promise.all(promiseListParts);
  client.end();
  process.exit(1);
}
seeding();
