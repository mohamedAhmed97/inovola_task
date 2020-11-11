const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');
const schema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    product_model: {
        type: String,
        required: true,

    },
    product_type: {
        type: String,
        enum: ['large machine', 'small machine', 'espresso machine'],
        required: true
    },
    water_line_compatible: {
        type: Boolean,
        default: false
    }

});
schema.methods.toJSON = function () {
    const CoffemMachineObject = this.toObject()

    delete CoffemMachineObject.product_model
    delete CoffemMachineObject.product_type
    delete CoffemMachineObject.water_line_compatible
    delete CoffemMachineObject._id
    delete CoffemMachineObject.__v
    return CoffemMachineObject
}
schema.plugin(uniqueValidator);

const CoffeeMachine = mongoose.model('CoffeeMachine', schema);
module.exports = CoffeeMachine