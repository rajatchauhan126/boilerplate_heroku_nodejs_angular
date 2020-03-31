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
        const customer = await PostService.create(body);

        return res.status(201).json({ "code": "200","status": "Post created successfully" });
    }
    catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: err.message });
        }

        // unexpected error
        return next(err);
    }
});

/* retrieves a customer by uid */
router.get('/get-all-post', async (req, res, next) => {
    try {
        const posts = await PostService.retrieve();

        return res.json({ posts: posts });
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