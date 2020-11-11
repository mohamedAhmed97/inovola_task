
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/inovola',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
module.exports = mongoose;    