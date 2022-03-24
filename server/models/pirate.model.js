const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [2, "Name must be 2 or more characters!"]
    },
    imageUrl: {
        type: String,
        required: [true, "You must include an image url!"]
    },
    chests: {
        type: Number,
        required: [true, "You must include a chest count!"]
    },
    catchPhrase: {
        type: String,
        required: [true, "You must include a catch phrase!!"]
    },
    position: {
        type: String,
        required: [true, "You must include a position!"]
    },
    pegLeg: {
        type: Boolean,
        required: [true, "You must include a peg leg value!!"]
    },
    eyePatch: {
        type: Boolean,
        required: [true, "You must include an eye patch value!"]
    },
    hookHand: {
        type: Boolean,
        required: [true, "You must include a hook hand value!"]
    }
}, {timestamps: true})

module.exports.Pirate = mongoose.model("Pirate", PirateSchema);