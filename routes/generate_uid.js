var express = require('express');
var uid = require('uid-safe');

var router = express.Router();
var userCount = 0;
/* GET a guid. */
router.post('/counter', function (req, res, next) {
    // var strUid = uid.sync(18);
    console.log(req.body.count);

    if (req.body.count > userCount) {
        userCount = req.body.count + 1;
    } else {
        userCount = userCount + 1;
    }

    console.log("I received a request to refresh the counter ", userCount);

    res.json({ count: userCount });
});

module.exports = router;