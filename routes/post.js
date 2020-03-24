// var express = require('express');
// var router = express.Router();

// var postService = require('../services/service.post');

// router.post('/create-post', postService.createPost);
// router.get('/get-all-post', postService.getAllPost);
// router.post('/create-comment', postService.createComment);

// module.exports = router;

var express = require('express');
var router = express.Router();
var PostService = require('../services/service.post');

/* GET customer listing. */
router.get('/', async function (req, res, next) {
    res.json({ error: "Invalid Customer UID." });
});

/* adds a new customer to the list */
router.post('/create-post', async (req, res, next) => {
    const body = req.body;
    try {
        const post = await PostService.createPost(body);
        // if (body.guid != null) {
        //     customer.guid = body.guid;
        // }
        res.cookie({ maxAge: 900000, httpOnly: true });

        // created the customer! 
        return res.status(201).json({ post: post });
    }
    catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: err.message });
        }

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


/* retrieves a customer by uid */
router.get('/:id', async (req, res, next) => {
    try {
        const customer = await PostService.retrieve(req.params.id);

        return res.json({ customer: customer });
    }
    catch (err) {
        // unexpected error
        return next(err);
    }
});

/* updates the customer by uid */
router.put('/:id', async (req, res, next) => {
    try {
        const customer = await PostService.update(req.params.id, req.body);

        return res.json({ customer: customer });
    }
    catch (err) {
        // unexpected error
        return next(err);
    }
});

/* removes the customer from the customer list by uid */
router.delete('/:id', async (req, res, next) => {
    try {
        const customer = await PostService.delete(req.params.id);

        return res.json({ success: true });
    }
    catch (err) {
        // unexpected error
        return next(err);
    }
});

module.exports = router;
