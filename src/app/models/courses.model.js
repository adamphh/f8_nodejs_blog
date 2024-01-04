const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, minLenth: 3, maxLength: 160, required: true },
    description: { type: String, default: '', maxLength: 600, required: false },
    image: { type: String, default: '', required: false },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
});

module.exports = mongoose.model('Course', Course);

