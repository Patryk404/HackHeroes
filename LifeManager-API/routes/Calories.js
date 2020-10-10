const Router = require('express').Router();
const {isAuth} = require('../middleware/is-auth');
const {CheckDate} = require('../middleware/check-date');
const CaloriesController = require('../controllers/Calories');

Router.get('/',isAuth,CheckDate,CaloriesController.getCalories);

Router.get('/food',isAuth,CaloriesController.getFood);

Router.delete('/food',isAuth,CaloriesController.deleteFood);

Router.post('/food',isAuth,CaloriesController.createFood);

Router.post('/eatfood',isAuth,CaloriesController.eatFood);

module.exports = Router;