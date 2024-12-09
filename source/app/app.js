//source/app/app.js
const express = require('express');
const bodyParser = require('body-parser');
const gameRoutes = require('../routes/game.router');
const companyRoutes = require('../routes/company.routes');
const consoleRoutes = require('../routes/console.routes');
const userRoutes = require('../routes/user.router');
const sequelize = require('../config/database');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api', gameRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/consoles', consoleRoutes);
app.use('/api/users', userRoutes);


app.use((error, request, response, next) => {
    console.error(error.stack);
    response.status(500).json({ 
        ok: false, 
        message: "AN ERROR HAS OCCURRED" 
    });
});

// Exportar la aplicación
module.exports = app;