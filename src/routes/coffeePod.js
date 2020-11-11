const express = require('express')
const router = new express.Router()
//coffemachine controller
const CoffeePodController=require('../controllers/CoffeePodController');

router.post('/coffee-pods/seeds',CoffeePodController.seedPodMachine);

router.get('/coffee-pods',CoffeePodController.index)
module.exports = router;