// const Posts = require("../models/model.post");
var mongoose = require('mongoose');
var Posts = mongoose.model('Posts');

let customers = {};
let counter = 0;

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

/* use the same patterns as on the client to validate the request */
let namePattern = /([A-Za-z\-\’])*/;
let zipCodePattern = /^[0-9]{5}(?:-[0-9]{4})?/;
let passwordPattern = /([a-z])/;

/* static customer service class */
class PostService {

    static createPost(data) {
        if (!data.community || !data.title) {
            throw new Error('All fiels are required');
        }
        var posts = new Posts();

        posts.userId = data.userId;

        posts.title = data.title;

        if (data.optionaltext) {
            posts.optionaltext = data.optionaltext;
        }
        posts.postDateTime = new Date();
        console.log('posts----------------', posts);
        let saveData = posts.save()
            .then((posts) => {
                return posts;
            })
            .catch((err) => {
                return 'error occured';
            });

    }

    static getAllPost() {

        console.log('posts------------getallpost----');
        return Posts.find({})
            .exec()
            .then((posts) => {

        console.log('posts----------------', posts);
                return posts;
            })
            .catch((err) => {
                console.log('posts-errr---------------', err);
                return err;


            });
    }
}

module.exports = PostService;
