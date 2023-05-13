const Router = require('../framework/Router.js');

const controller = require('./user-controller.js');

const router = new Router();

router.get('/users', controller.getUsers)

router.post('/users', controller.createUser)

module.exports = router