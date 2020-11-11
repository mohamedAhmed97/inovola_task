const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');
const schema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    coffee_flavor: {
        type: String,
        enum: ['caramel', 'psl', 'mocha', 'hazelnut', 'mocha'],
        required: true

    },
    product_type: {
        type: String,
        enum: ['large coffee pod', 'small coffee pod', 'espresso coffee pod'],
        required: true
    },
    pack_size: {
        type: String,
        enum: ['1 dozen', '3 small dozen', '5 espresso dozen', '7 dozen'],
        required: true
    }

});
schema.methods.toJSON = function () {
    const CoffemMachineObject = this.toObject()

    delete CoffemMachineObject.coffee_flavor
    delete CoffemMachineObject.product_type
    delete CoffemMachineObject.pack_size
    delete CoffemMachineObject._id
    delete CoffemMachineObject.__v
    return CoffemMachineObject
}
schema.plugin(uniqueValidator);

const CoffeePod = mongoose.model('CoffeePod', schema);
module.exports = CoffeePod