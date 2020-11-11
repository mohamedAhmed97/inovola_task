
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/inovola_task',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
module.exports = mongoose;    