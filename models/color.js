const { Schema, model } = require('mongoose');

const ColorSchema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
});

module.exports = model('Color', ColorSchema)
