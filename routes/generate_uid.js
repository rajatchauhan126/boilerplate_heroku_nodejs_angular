var express = require('express');
var uid = require('uid-safe');

var router = express.Router();
var userCount = 0;
/* GET a guid. */
router.post('/counter', function (req, res, next) {
    // var strUid = uid.sync(18);
    console.log("I received a request to refresh the counter ", userCount+1);
    userCount = userCount + 1;
    res.json({ count: userCount });
});

module.exports = router;