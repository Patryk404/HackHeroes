const Router = require('express').Router();
const {isAuth} = require('../middleware/is-auth');
const MeController = require('../controllers/Me');

Router.get('/',isAuth,MeController.getInformations);

Router.put('/',isAuth,MeController.putInformations)

module.exports = Router;