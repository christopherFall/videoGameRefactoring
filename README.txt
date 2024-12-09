apiVideoGames/
├── source/
│   ├── app/
│   │   └── app.js // Configura la aplicación Express, define middleware y rutas.
│   ├── config/
│   │   └── database.js // Configura la conexión a la base de datos MySQL usando Sequelize.
│   ├── controllers/ // Contiene la lógica para manejar las solicitudes HTTP y las respuestas para cada entidad (juegos, consolas, compañías, usuarios).
│   │   ├── company.controller.js
│   │   ├── console.controller.js
│   │   ├── game.controller.js
│   │   └── user.controller.js
│   ├── models/ // Define la estructura de los datos y las relaciones entre ellos usando Sequelize.
│   │   ├── company.model.js
│   │   ├── console.model.js
│   │   ├── game.model.js
│   │   ├── index.js
│   │   └── user.model.js
│   ├── routes/ // Define las rutas de la API para cada entidad.
│   │   ├── company.routes.js
│   │   ├── console.routes.js
│   │   ├── game.router.js
│   │   └── user.router.js
│   ├── services/ // Contiene la lógica de negocio para interactuar con los modelos y realizar operaciones CRUD.
│   │   ├── game.service.js
│   │   └── user.service.js
│   └── index.js // Punto de entrada de la aplicación, donde se inicia el servidor y se establece la conexión a la base de datos.
└── .env