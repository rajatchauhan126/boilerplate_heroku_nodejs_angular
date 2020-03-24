var express = require('express');
var router = express.Router();
var PostService = require('../services/service.post');

/* adds a new customer to the list */
router.post('/create-post', async (req, res, next) => {
    const body = req.body;
    console.log('data------1----', req.body);
    try {
        console.log('data------2----', data);
        const post = await PostService.createPost(body);
        // if (body.guid != null) {
        //     customer.guid = body.guid;
        // }
        res.cookie({ maxAge: 900000, httpOnly: true });

        // created the customer! 
        return res.status(200).json({ post: post });
    }
    catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: err.message });
        }
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
