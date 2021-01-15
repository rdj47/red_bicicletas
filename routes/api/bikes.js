var express = require('express');
var router = express.Router();
var bikeControllerAPI = require('../../controllers/api/bikeControllerAPI');

router.get('/', bikeControllerAPI.bike_list);
router.post('/create', bikeControllerAPI.bike_create);
router.put('/update', bikeControllerAPI.bike_update);
router.delete('/delete', bikeControllerAPI.bike_delete);

module.exports = router;

