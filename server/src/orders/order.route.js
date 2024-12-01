const express = require('express');
const { createAnOrder } = require('./order.controller');
const router = express.Router();

router.post("/", createAnOrder)

module.exports = router;