var express = require('express');
var uid = require('uid-safe');

var router = express.Router();
var userCount = 0;
/* GET a guid. */
router.post('/counter', function (req, res, next) {
    // var strUid = uid.sync(18);

    if (req.body.count > userCount) {
        userCount = req.body.count + 1;
        // userCount = userCount + 1;
    } else {
        userCount = userCount + 1;
    }
    res.json({ count: userCount });
});

module.exports = router;