var express = require('express');
var router = express.Router();

const costume_controller = require('../controllers/costume');

router.get('/', costume_controller.costume_view_all_Page);
router.get('/detail', costume_controller.costume_view_one_Page);
router.get('/create', costume_controller.costume_create_Page);

module.exports = router;