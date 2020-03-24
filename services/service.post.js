// const Posts = require("../models/model.post");
var mongoose = require('mongoose');
var Posts = mongoose.model('Posts');
let Validator = require('fastest-validator');

let customers = {};
let counter = 0;

/* create an instance of the validator */
let postValidator = new Validator();

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

/* use the same patterns as on the client to validate the request */
let namePattern = /([A-Za-z\-\’])*/;
let zipCodePattern = /^[0-9]{5}(?:-[0-9]{4})?/;
let passwordPattern = /([a-z])/;

/* customer validator shema */
// const customerVSchema = {
//     guid: { type: "string", min: 3 },

//     first_name: { type: "string", min: 1, max: 50, pattern: namePattern },
//     last_name: { type: "string", min: 1, max: 50, pattern: namePattern },
//     email: { type: "email", max: 75 },
//     zipcode: { type: "string", max: 5, pattern: zipCodePattern },

//     password: { type: "string", min: 2, max: 50, pattern: passwordPattern }
// };

/* static customer service class */
class PostService {

    static createPost(data) {
        if (!data.community || !data.title) {
            sendJSONresponse(res, 400, {
                "message": "All fields required"
            });
            return;
        }
        var posts = new Posts();

        posts.userId = data.userId;

        posts.title = data.title;

        if (data.optionaltext) {
            posts.optionaltext = data.optionaltext;
        }
        posts.postDateTime = new Date();

        let saveData = posts.save();

        return saveData;
    }

    static getAllPost() {
        return Posts.find({})
            .exec()
            .then((employees) => {
                // FIRST CONSOLE.LOG
                console.log(employees);
                return employees;
            })
            .catch((err) => {
                return 'error occured';
            });
    }

    static likePost(uid, data) {
        if (customers[uid] != null) {
            const customer = customers[uid];

            Object.assign(customer, data);
        }
        else {
            throw new Error('Unable to retrieve a customer by (uid:' + cuid + ')');
        }
    }

    // module.exports.getAllPost = function (req, res) {
    //     Posts
    //         .find({})
    //         .exec(function (err, user) {
    //             res.status(200).json(user);
    //         });
    // };



    // static create(data) {
    //     var vres = customerValidator.validate(data, customerVSchema);

    //     /* validation failed */
    //     if (!(vres === true)) {
    //         let errors = {}, item;

    //         for (const index in vres) {
    //             item = vres[index];

    //             errors[item.field] = item.message;
    //         }

    //         throw {
    //             name: "ValidationError",
    //             message: errors
    //         };
    //     }

    //     let post = new PostModel(data.first_name, data.last_name, data.email, data.zipcode, data.password);

    //     customer.uid = 'c' + counter++;

    //     customers[customer.uid] = customer;

    //     return customer;
    // }

    // static retrieve(uid) {
    //     if (customers[uid] != null) {
    //         return customers[uid];
    //     }
    //     else {
    //         throw new Error('Unable to retrieve a customer by (uid:' + uid + ')');
    //     }
    // }

    // static update(uid, data) {
    //     if (customers[uid] != null) {
    //         const customer = customers[uid];

    //         Object.assign(customer, data);
    //     }
    //     else {
    //         throw new Error('Unable to retrieve a customer by (uid:' + cuid + ')');
    //     }
    // }

    // static delete(uid) {
    //     if (customers[uid] != null) {
    //         delete customers[uid];
    //     }
    //     else {
    //         throw new Error('Unable to retrieve a customer by (uid:' + cuid + ')');
    //     }
    // }
}

module.exports = PostService;










// var mongoose = require('mongoose');
// var Posts = mongoose.model('Posts');

// var sendJSONresponse = function (res, status, content) {
//     res.status(status);
//     res.json(content);
// };

// module.exports.createPost = function (req, res) {
//     if (!req.body.community || !req.body.title) {
//         sendJSONresponse(res, 400, {
//             "message": "All fields required"
//         });
//         return;
//     }
//     var posts = new Posts();

//     posts.userId = req.body.userId;

//     posts.title = req.body.title;

//     if (req.body.optionaltext) {
//         posts.optionaltext = req.body.optionaltext;
//     }
//     posts.postDateTime = new Date();

//     posts.save(function (err) {
//         res.status(200);
//         res.json({
//             "message": 'Post created successfully'
//         });
//     });
// };

// module.exports.getAllPost = function (req, res) {
//     Posts
//         .find({})
//         .exec(function (err, user) {
//             res.status(200).json(user);
//         });
// };

// module.exports.createComment = function (req, res) {

//     if (!req.body.userId || !req.body.comment || !req.body.commentId) {
//         sendJSONresponse(res, 400, {
//             "message": "All fields required"
//         });
//         return;
//     }
//     commentObject = {}
//     // commentObject.userId = ObjectId(req.body.userId);

//     commentObject.userId = req.body.userId;

//     commentObject.comment = req.body.comment;

//     commentObject.commentDateTime = new Date();
//     Posts
//         .update({ _id: new mongoose.mongo.ObjectId(req.body.commentId) },
//             {
//                 $push: {
//                     "comments": commentObject
//                 }
//             }
//         )
//         .exec(function (err, comment) {
//             res.status(200).json(comment);
//         });
// };