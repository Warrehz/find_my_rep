let express = require('express');
let router = express.Router();

// homepage route
router.get('/', function(request, response) {
  response.render('pages/index', {

  });
});

module.exports = router;
