const Router = require('express').Router();
const {isAuth} = require('../middleware/is-auth');
const WaterController = require('../controllers/Water');

Router.get('/',isAuth,WaterController.getCups);

Router.put('/plus',isAuth,WaterController.plusCup);

Router.put('/minus',isAuth,WaterController.minusCup);

module.exports = Router;