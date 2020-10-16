const Router = require('express').Router();
const {isAuth} = require('../middleware/is-auth');
const {ResetAll} = require('../middleware/resetAll');
const CaloriesController = require('../controllers/Calories');

Router.get('/',isAuth,ResetAll,CaloriesController.getCalories);

Router.get('/food',isAuth,ResetAll,CaloriesController.getFood);

Router.get('/history',isAuth,ResetAll,CaloriesController.getHistoryCalories);

Router.delete('/food',isAuth,ResetAll,CaloriesController.deleteFood);

Router.patch('/intake',isAuth,ResetAll,CaloriesController.newIntake)

Router.post('/food',isAuth,ResetAll,CaloriesController.createFood);

Router.post('/eatfood',isAuth,ResetAll,CaloriesController.eatFood);

module.exports = Router;