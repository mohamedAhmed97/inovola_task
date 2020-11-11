const express = require('express')
const app = express()
//connect db
require('./database/connection')
//coffe machine route
const coffeeMachineRoute = require('./routes/coffeeMachine')
app.use(express.json());
app.use("/api", coffeeMachineRoute);
module.exports = app