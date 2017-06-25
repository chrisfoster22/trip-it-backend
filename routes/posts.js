var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    req.app.get("db").collection('posts').find().toArray(function(err, results) {
        res.json(results)
    })

    // res.json([
    //     {
    //         id: 1,
    //         location: "Tropical Beach",
    //         img_url:"http://eskipaper.com/images/tropical-beach-1.jpg",
    //         size: .8
    //     }, {
    //         id: 2,
    //         location: "Mountain",
    //         img_url: "https://img.grouponcdn.com/deal/5EXVDNMDEe1mtyEK6Pgp/ZC-1057x634/v1/c700x420.jpg",
    //         size: .6
    //     }, {
    //         id: 2,
    //         location: "Stockholm",
    //         img_url: "https://en.aegeanair.com/-/media/destinations/stockholm/stockholm_final_cover.jpg",
    //         size: 1.3
    //     }, {
    //         id: 2,
    //         location: "Fjord",
    //         img_url: "http://www.fjords.com/wp-content/uploads/photo-gallery/DSC_9011.jpg",
    //         size: 1
    //     }, {
    //         id: 2,
    //         location: "Stockholm",
    //         img_url: "https://en.aegeanair.com/-/media/destinations/stockholm/stockholm_final_cover.jpg",
    //         size: 1
    //     }, {
    //         id: 2,
    //         location: "Fjord",
    //         img_url: "http://www.fjords.com/wp-content/uploads/photo-gallery/DSC_9011.jpg",
    //         size: 1.33
    //     }, {
    //         id: 2,
    //         location: "Stockholm",
    //         img_url: "https://en.aegeanair.com/-/media/destinations/stockholm/stockholm_final_cover.jpg",
    //         size: 1.3
    //     }, {
    //         id: 2,
    //         location: "Fjord",
    //         img_url: "http://www.fjords.com/wp-content/uploads/photo-gallery/DSC_9011.jpg",
    //         size: 1
    //     }, {
    //         id: 2,
    //         location: "Stockholm",
    //         img_url: "https://en.aegeanair.com/-/media/destinations/stockholm/stockholm_final_cover.jpg",
    //         size: 1
    //     }, {
    //         id: 2,
    //         location: "Fjord",
    //         img_url: "http://www.fjords.com/wp-content/uploads/photo-gallery/DSC_9011.jpg",
    //         size: 1.33
    //     }
    // ]);

});

router.post('/', function(req, res, next) {
    req.app.get("db").collection('posts').save(req.body, (err, result) => {
        if (err) return console.log(err)

        req.app.get("db").collection('posts').find().toArray(function(err, results) {
            res.json(results)
        })
    })
})

module.exports = router;
