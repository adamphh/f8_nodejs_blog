const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, minLenth: 3, maxLength: 160, required: true },
    description: { type: String, default: '', maxLength: 600, required: false },
    image: { type: String, default: '', required: false },
    videoId: { type: String, minLenth: 3, maxLength: 160, required: true },
    level: { type: String, minLenth: 3, maxLength: 15 },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Course', Course);

