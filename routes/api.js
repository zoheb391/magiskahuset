var express = require('express');
var router = express.Router();

//Load the controller required for these routes
var db = require('../controllers/mainController');

//ROUTING

router.get('/api/bus', db.bus);
router.get('/api/ornsberg', db.ornsberg);
router.get('/api/telefonplan', db.telefonplan);

module.exports = router;

// var express = require('express');
// var router = express.Router();
//
// router.get('/api', function(req, res) {
//   res.render('404', {
//   });
// });
//
// module.exports = router;
