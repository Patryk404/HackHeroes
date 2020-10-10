const Router = require('express').Router();
const {isAuth} = require('../middleware/is-auth');
const {CheckDate} = require('../middleware/check-date');
const CaloriesController = require('../controllers/Calories');

Router.get('/',isAuth,CheckDate);

module.exports = Router;