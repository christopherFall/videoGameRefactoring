//source/index.js
const app = require('./source/app/app');
const { sequelize, syncDatabase } = require('./source/models');

const port = process.env.PORT || 4000;

sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
        app.listen(port, () => {
            console.log(`SERVER RUNNING ON PORT ${port}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });