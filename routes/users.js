var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
  res.json({x: 1, y: 1})
});

router.post('/testPost', function(req, res, next) {
  console.log("111", req.body)
  res.json({...req.body, fromServer: true})
});

module.exports = router;
