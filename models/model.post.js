var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    userId: {
        type: String
        // required: true
    },
    community: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    optionaltext: {
        type: String,
        require: false
    },
    image: {
        type: String,
        require: false
    },
    postDateTime: {
        type: Date,
        default: Date.now
    },
    comments: [
        {
            userId: String,
            comment: String,
            commentDateTime: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

mongoose.model('Posts', postSchema);
