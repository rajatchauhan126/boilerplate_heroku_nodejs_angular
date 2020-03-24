var express = require('express');
var router = express.Router();
var PostService = require('../services/service.post');

/* adds a new customer to the list */
router.post('/create-post', async (req, res, next) => {
    let body = req.body;
    try {
        const post = await PostService.createPost(body);
        // if (body.guid != null) {
        //     customer.guid = body.guid;
        // }
        res.cookie({ maxAge: 900000, httpOnly: true });

        // created the customer! 
        console.log('post---------', post)
        return res.status(200).json({ post: post });
    }
    catch (err) {
        if (err.name === 'ValidationError') {
            console.log('err', err)
            return res.status(401).json({ error: err.message });
        }
        console.log('err', err)
        return res.status(400).json({ error: err.message });
        // unexpected error
        return next(err);
    }
});


router.get('/get-all-post', async (req, res, next) => {
    try {
        const post = await PostService.getAllPost();
        return res.json({ post: post });
    }
    catch (err) {
        // unexpected error
        return next(err);
    }
});


module.exports = router;
