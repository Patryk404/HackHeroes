const Router = require('express').Router();
const {isAuth} = require('../middleware/is-auth');
const {ResetAll} = require('../middleware/resetAll');
const CaloriesController = require('../controllers/Calories');

Router.get('/',isAuth,ResetAll,CaloriesController.getCalories);

Router.get('/average',isAuth,CaloriesController.getCaloriesAverage);

Router.get('/food',isAuth,ResetAll,CaloriesController.getFood);

Router.get('/history',isAuth,ResetAll,CaloriesController.getHistoryCalories);

Router.delete('/food',isAuth,CaloriesController.deleteFood);

Router.patch('/intake',isAuth,CaloriesController.newIntake)

Router.post('/food',isAuth,CaloriesController.createFood);

Router.post('/eatfood',isAuth,CaloriesController.eatFood);

module.exports = Router;