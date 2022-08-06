const express = require('express');
const route = express.Router()
const services = require('../services/render')

/*
* @description Root Route
* @method GET /
*/

route.get('/',services.homeRoutes)

/*
* @description Add users
* @method GET /add-user
*/
route.get('/add-user',services.add_user)
/*
* @description update user
* @method GET /update-user
*/
route.get('/update-user',services.update_user)

module.exports = route