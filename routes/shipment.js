const express = require('express');
const router=express.Router();

const {createShipment,addhop} = require('../controllers/shipment');
const {addFlight} = require('../controllers/flights');

router.post('/create',createShipment);
router.put('/:shipment_number/hops/add',addhop);
router.post('/:id/flights/add',addFlight);

module.exports = router;