const Router = require('express').Router();
const {isAuth} = require('../middleware/is-auth');
const MeController = require('../controllers/Me');

Router.get('/average',isAuth,MeController.getAverage);

module.exports = Router;