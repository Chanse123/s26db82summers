var express = require('express');
var router = express.Router();

var costume_controller = require('../controllers/costume');

function secured(req, res, next) {
  console.log("SECURED CHECK:", req.user);

  if (req.user) {
    return next();
  }

  console.log("REDIRECTING TO LOGIN WITH ERROR");
  res.redirect("/login?error=AccessDenied");
}

router.get('/', costume_controller.costume_view_all_Page);
router.get('/detail', costume_controller.costume_view_one_Page);
router.get('/create', costume_controller.costume_create_Page);
router.get('/update', secured, costume_controller.costume_update_Page);
router.get('/delete', costume_controller.costume_delete_Page);

module.exports = router;