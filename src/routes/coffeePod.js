const express = require('express')
const router = new express.Router()
//coffemachine controller
const CoffeePodController=require('../controllers/CoffeePodController');

router.post('/coffee-pods/seeds',CoffeePodController.store);

router.get('/coffee-pods',CoffeePodController.index)
module.exports = router;