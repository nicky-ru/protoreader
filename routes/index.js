var express = require('express');
var router = express.Router();
const Client = require('./client');
const queries = require('./queries');
const getDevices = queries.getDevices;
const gql = require('graphql-tag');

// const decoder = require('../lib/decoder');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.render('index', { title: 'Express' });
});

// router.get('/api/devices', async function (req, res, next) {
//   res.set('Access-Control-Allow-Origin', '*');
//   console.log("querying devices");
//   const queryResult = await Client.query({query: gql(getDevices)});
//   res.json(queryResult.data.devices);
// });
//
// router.get('/api/devices/:imei', async function (req, res, next) {
//   res.set('Access-Control-Allow-Origin', '*');
//   console.log("querying device records");
//   // const imei = req.params.imei;
//   // const queryResult = await Client.query({
//   //   query: gql(queries.deviceRecords),
//   //   variables: {imei: imei}
//   // })
//   // const decodedTelemetry = decoder.decodeTelemetry(queryResult.data.deviceRecords);
//   // res.json(decodedTelemetry);
//   res.json({"data":"data"});
// })

module.exports = router;
