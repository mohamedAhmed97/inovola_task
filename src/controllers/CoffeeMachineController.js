const CoffeeMachine = require('../database/models/CoffeeMachine');
const coffeeMachines = require('../database/seeds/coffeeMachineData')
module.exports = {
    seedCoffeeMachine: async (req, res) => {
        try {
            for (coffemachine of coffeeMachines) {
                var newCoffeMachine = new CoffeeMachine(coffemachine)
                await newCoffeMachine.save();
            }
            res.send("done")
        } catch (error) {
            res.send(error)
        }

    },
    index: async (req, res) => {
        try {
            const match = {}
            for (key in req.query) {
                match[key] = req.query[key]
            }
            const coffeeMachines = await CoffeeMachine.find(match);
            if (!coffeeMachines) {
                throw new Error("404")
            }
            arr = []
            for (coffeeMachine in coffeeMachines){
                arr.push(coffeeMachines[coffeeMachine].code)
        }
        res.send({
            "arrays": arr,
            "array of obj": coffeeMachines
        })
    } catch(error) {
        res.send(error)
    }
}
}