const Router = require('express').Router();
const AuthController = require('../controllers/Auth');

Router.post('/signup',AuthController.signUp);

Router.post('/login',AuthController.login);

module.exports = Router;