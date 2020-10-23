const Router = require('express').Router();
const {isAuth} = require('../middleware/is-auth');
const WaterController = require('../controllers/Water');
const { ResetAll } = require('../middleware/resetAll');

Router.get('/',isAuth,ResetAll,WaterController.getCups);

Router.get('/history',isAuth,WaterController.getHistory);

Router.get('/average',isAuth,WaterController.getAverage);

Router.put('/plus',isAuth,WaterController.plusCup);

Router.put('/minus',isAuth,WaterController.minusCup);

module.exports = Router;