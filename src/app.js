const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('./config/config');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: config.jwtSecret,
    resave: false,
    saveUninitialized: true
}));

// Rutas
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// Iniciar servidor
app.listen(config.port, () => {
    console.log(`Servidor iniciado en http://localhost:${config.port}`);
});
