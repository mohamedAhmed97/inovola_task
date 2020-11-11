const express = require('express')
const app = express()
//connect db
require('./database/connection')
//coffe machine route
const coffeeMachineRoute = require('./routes/coffeeMachine')
//coffee pods
const coffeePodRoute=require('./routes/coffeePod')
app.use(express.json());
app.use("/api", coffeeMachineRoute);
app.use("/api",coffeePodRoute)
module.exports = app