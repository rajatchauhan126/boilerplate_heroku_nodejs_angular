var express = require('express');
var uid = require('uid-safe');

var router = express.Router();
var userCount = 0;
var games;
var covidData;
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

router.post('/games', function (req, res, next) {
    if (games) {
        for (let i = 0; i < req.body.length; i++) {
            if (req.body[i].count > games[i].count) {
                games = req.body;
                console.log('games 3', i);
            }
        }
    } else {
        games = req.body;
    }
    res.json({ games: games });
});

router.post('/admin/covid', function (req, res, next) {
    covidData = req.body;
    // if (games) {
    //     for (let i = 0; i < req.body.length; i++) {
    //         if (req.body[i].count > games[i].count) {
    //             games = req.body;
    //             console.log('games 3', i);
    //         }
    //     }
    // } else {
    //     games = req.body;
    // }
    res.json({ covid: covidData });
});

router.post('/admin/get-covid', function (req, res, next) {
    res.json({ covid: covidData });
});

module.exports = router;