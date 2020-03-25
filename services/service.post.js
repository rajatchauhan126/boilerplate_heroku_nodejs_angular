var mongoose = require('mongoose');
var Posts = mongoose.model('Posts');

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.createPost = function (req, res) {
    if (!req.body.community || !req.body.title) {
        sendJSONresponse(res, 400, {
            "message": "All fields required"
        });
        return;
    }
    var posts = new Posts();

    posts.userId = req.body.userId;

    posts.title = req.body.title;

    if (req.body.optionaltext) {
        posts.optionaltext = req.body.optionaltext;
    }
    posts.postDateTime = new Date();

    posts.save(function (err) {
        res.status(200);
        res.json({
            "message": 'Post created successfully'
        });
    });
};

module.exports.getAllPost = function (req, res) {
    Posts
        .find({})
        .exec(function (err, user) {
            res.status(200).json(user);
        });
};