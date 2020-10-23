const Router = require('express').Router();
const {isAuth} = require('../middleware/is-auth');
const SleepController = require('../controllers/Sleep');

Router.get('/',isAuth,SleepController.getSleep);

Router.get('/history',isAuth,SleepController.getHistory);

Router.get('/average',isAuth,SleepController.getAverage);

Router.put('/gotosleep',isAuth,SleepController.startSleep);

Router.put('/wakeup',isAuth,SleepController.stopSleep);

module.exports = Router;