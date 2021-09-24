var express = require('express');
var router = express.Router();
const SensorData = require('./pebbleproto');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/telemetry', function (req, res, next) {
  const raw = req.body.raw;
  const encodedTelemetry = raw.replace(/0x/g, '');
  console.log(encodedTelemetry);
  const telemetry = SensorData.decode(Buffer.from(encodedTelemetry, 'hex'));
  res.json(telemetry);
});

module.exports = router;
