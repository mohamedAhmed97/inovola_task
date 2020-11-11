const CoffeePod = require('../database/models/CoffeePod');
const coffeePods = require('../database/seeds/coffeePodData')
module.exports = {
    seedPodMachine: async (req, res) => {
        try {
            for (coffeepod of coffeePods) {
                var newCoffeePod = new CoffeePod(coffeepod)
                await newCoffeePod.save();
            }
            res.send("done")
        } catch (error) {
            res.send(error)
        }

    },
    index: async (req, res) => {
        try {
            //get query strings
            const match = {}
            for (key in req.query) {
                match[key] = req.query[key]
            }
            //get data
            const coffeePods = await CoffeePod.find(match);
            if (!coffeePods) {
                throw new Error("404")
            }
            //convert to array
            arr = []
            for (coffeePod in coffeePods) {
                arr.push(coffeePods[coffeePod].code)
            }
            res.send({
                "arrays": arr,
                "array of obj": coffeePods
            })
        } catch (error) {
            res.send(error)
        }
    },
}

