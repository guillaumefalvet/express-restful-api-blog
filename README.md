### REST API WITH EXPRESS

# Available route for the API

| route               |  GET  | POST  | PATCH | DELETE |
| ------------------- | :---: | :---: | :---: | :----: |
| /posts              |   ✅   |   ✅   |   ❌   |   ❌    |
| /posts/:id          |   ✅   |   ❌   |   ✅   |   ✅    |
| /posts/category/:id |   ✅   |   ❌   |   ❌   |   ❌    |
| /categories         |   ✅   |   ✅   |   ❌   |   ❌    |
| /categories/:id     |   ✅   |   ❌   |   ✅   |   ✅    |



### SETTING UP THE FIRST TIME

- create PSQL user: 'oblog' with password 'oblog',
- create a database 'oblog' with owner the user 'oblog',
- have sqitch, postgres
- `npm i`
- rename `.env example` to `.env`
- `sqitch deploy`
- `npm run DBsetup`

start the app
- `npm run dev`