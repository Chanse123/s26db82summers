var express = require('express');
var router = express.Router();
var costume_controllers = require('../controllers/costume');

const costume_controller = require('../controllers/costume');

router.get('/', costume_controller.costume_view_all_Page);
router.get('/detail', costume_controller.costume_view_one_Page);
router.get('/create', costume_controller.costume_create_Page);
router.get('/update', costume_controller.costume_update_Page);
router.get('/delete', costume_controllers.costume_delete_Page);

module.exports = router;