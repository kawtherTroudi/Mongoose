import mongoose from 'mongoose';
const { Schema } = mongoose;

const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods: [String]
});

module.exports = mongoose.model('person', personSchema)