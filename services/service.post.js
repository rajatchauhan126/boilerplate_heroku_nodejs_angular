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

    static createPost = (data) => {
        return new Promise((reject, resolve) => {
            if (!data.community || !data.title) {
                reject('All fiels are required');
            }
            var posts = new Posts();

            posts.userId = data.userId;

            posts.community = data.community;

            posts.title = data.title;

            if (data.optionaltext) {
                posts.optionaltext = data.optionaltext;
            }
            posts.postDateTime = new Date();

            let saveData = posts.save()
            console.log('saveData--------------------------', saveData)
            resolve(saveData);
        })
    }

    static createPost2(data) {
        console.log('data----------', data)
        if (!data.community || !data.title) {
            throw new Error('All fiels are required');
        }
        var posts = new Posts();

        posts.userId = data.userId;

        posts.community = data.community;

        posts.title = data.title;

        if (data.optionaltext) {
            posts.optionaltext = data.optionaltext;
        }
        posts.postDateTime = new Date();

        let saveData = posts.save()

        return saveData;
    }

    static getAllPost() {

        return Posts.find({})

    }
}

module.exports = PostService;
