const express = require('express')
const router = new express.Router()
//coffemachine model
const CoffeeMachine = require('../database/models/CoffeeMachine')

router.post('/users', async (req, res) => {
    const coffemachine = new CoffeeMachine(req.body);
    try {
        await coffemachine.save();
        res.status(201).send({ coffemachine });

    } catch (error) {
        res.status(202).send(error);
    }
})

module.exports = router;