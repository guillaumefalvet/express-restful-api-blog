### REST API WITH EXPRESS
Cette API permet de gérer des catégories et des posts pour votre site web ou votre application.

Voici une brève description de chaque route disponible sur notre API :

**GET** `/posts` : Cette route permet de récupérer tous les posts enregistrés dans notre base de données.

**POST** `/posts` : Cette route permet de créer un nouveau post en envoyant les informations nécessaires dans le corps de la requête. Les données envoyées doivent être validées en utilisant le schéma de validation oblogCreatePost.

**GET** `/posts/:id` : Cette route permet de récupérer un post spécifique en fonction de son ID.

**PATCH** `/posts/:id` : Cette route permet de modifier un post existant en fonction de son ID. Les données envoyées doivent être validées en utilisant le schéma de validation oblogModifyPost.

**DELETE** `/posts/:id` : Cette route permet de supprimer un post existant en fonction de son ID.

**GET** `/posts/category/:id` : Cette route permet de récupérer tous les posts appartenant à une catégorie spécifique en fonction de son ID.

**GET** `/categories` : Cette route permet de récupérer toutes les catégories enregistrées dans notre base de données.

**POST** `/categories` : Cette route permet de créer une nouvelle catégorie en envoyant les informations nécessaires dans le corps de la requête. Les données envoyées doivent être validées en utilisant le schéma de validation oblogCreateCategory.

**PATCH** `/categories/:id` : Cette route permet de modifier une catégorie existante en fonction de son ID. Les données envoyées doivent être validées en utilisant le schéma de validation oblogModifyCategory.

**DELETE** `/categories/:id` : Cette route permet de supprimer une catégorie existante en fonction de son ID.


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