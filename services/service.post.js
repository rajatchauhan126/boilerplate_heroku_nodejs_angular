var mongoose = require('mongoose');
var Posts = mongoose.model('Posts');

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('file storage', file)
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});


var upload = multer({ storage: storage }).single('image')

module.exports.createPost = (upload, (req, res, next) => {
    console.log('req.file', req.file);
    if (!req.body.community || !req.body.title) {
        sendJSONresponse(res, 400, {
            "message": "All fields required"
        });
        return;
    }
    var posts = new Posts();

    posts.userId = req.body.userId;

    posts.title = req.body.title;
    // posts.image = req.body.image;
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
});

module.exports.getAllPost = function (req, res) {
    Posts
        .find({})
        .exec(function (err, user) {
            res.status(200).json(user);
        });
};