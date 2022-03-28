const mongoose = require('mongooo');

const Schema = mongoose.Schema;

const kategoriaSchema = new Schema({
    _id: NUumber,
    name: {
        type: Number,
        required: true,
        unique: true,
        maxlength: 30
    }

});

module.exports = mongoose.model('kategoria',kategoriaSchema,'kategoriak');