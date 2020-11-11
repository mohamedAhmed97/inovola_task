const express = require('express')
const router = new express.Router()
//coffemachine controller
const CoffeeMachineController=require('../controllers/CoffeeMachineController');

router.post('/coffee_machines/seeds',CoffeeMachineController.seedCoffeeMachine);

router.get('/coffee_machines',CoffeeMachineController.index)
module.exports = router;