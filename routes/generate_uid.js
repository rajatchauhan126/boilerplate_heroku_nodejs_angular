var express = require('express');
var uid = require('uid-safe');
const fs = require('fs');

var router = express.Router();
var userCount = 0;
let gamesData = {};
let covidData = {};
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

router.post('/post-games', function (req, res, next) {
    let newdata = req.body;
    let readData;
    fs.readFile('games.json', (err, data) => {
        if (err) {
            console.log('err', err);
            return;
        };
        readData = JSON.parse(data);
        readData.push(newdata);

        fs.writeFile('games.json', JSON.stringify(readData), (err) => {
            if (err) {
                console.log('err', err);
                return;
            }
            console.log('Data written to file');
        });
    });
    res.json({ code: 200, status: "Data written to file success" });
});


router.post('/post-games-count', function (req, res, next) {
    fs.writeFile('games.json', JSON.stringify(req.body), (err) => {
        if (err) {
            console.log('err', err);
            return;
        }
        console.log('Data written to file');
    });
    res.json({ code: 200, games: req.body, status: "Count updated successfully" });
});



router.post('/get-games', function (req, res, next) {

    fs.readFile('games.json', (err, data) => {
        if (err) {
            console.log('err', err);
            return;
        };
        gamesData = JSON.parse(data);
    });

    res.json({ games: gamesData });
});

router.post('/admin/post-covid', function (req, res, next) {

    let data = JSON.stringify(req.body, null, 2);

    fs.writeFile('covid.json', data, (err) => {
        if (err) {
            console.log('err', err);
            return;
        }
        console.log('Data written to file');
    });

    res.json({ code: 200, status: "Data written to file success" });
});

router.post('/admin/get-covid', function (req, res, next) {

    fs.readFile('covid.json', (err, data) => {
        if (err) {
            console.log('err', err);
            return;
        };
        covidData = JSON.parse(data);
    });

    res.json({ covid: covidData });
});

module.exports = router;