'use strict';
const Client = require('../middleware/client');
const queries = require('../middleware/graphql/queries');
const getDevices = queries.getDevices;
const deviceRecords = queries.deviceRecords;
const gql = require('graphql-tag');
const decoder = require('../middleware/decoder');

exports.devices = async (req, res, next) => {
    console.log("querying devices");
    const queryResult = await Client.query({query: gql(getDevices)});
    res.set('Access-Control-Allow-Origin', '*');
    res.json(queryResult.data.devices);
}

exports.deviceRecords = async (req, res, next) => {
    console.log("querying device records");
    const imei = req.params.imei;
    const queryResult = await Client.query({query: gql(deviceRecords), variables: {imei: imei}});
    let decodedTelemetry = decoder.decodeTelemetry(queryResult.data.deviceRecords);
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Cache-control', 'no-store');
    res.json({"decoded": decodedTelemetry, "encoded": queryResult.data.deviceRecords});
}