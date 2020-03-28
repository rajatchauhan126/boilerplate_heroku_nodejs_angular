var express = require('express');
var router = express.Router();
var PostService = require('../services/service.post');



/* adds a new customer to the list */
router.post('/create-post', PostService.createPost);
router.get('/get-all-post', PostService.getAllPost);
module.exports = router;
