const express = require('express')
const router = new express.Router()
//coffemachine controller
const CoffeeMachineController=require('../controllers/CoffeeMachineController');

router.post('/coffee-machines/seeds',CoffeeMachineController.seedCoffeeMachine);

router.get('/coffee-machines',CoffeeMachineController.index)
module.exports = router;