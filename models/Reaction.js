const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtValue => dateFormat(createdAtValue)
    }
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;