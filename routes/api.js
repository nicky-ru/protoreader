'use strict';
const express = require('express');
const Client = require('../middleware/client');
const queries = require('../middleware/graphql/queries');
const getDevices = queries.getDevices;
const deviceRecords = queries.deviceRecords;
const gql = require('graphql-tag');
const decoder = require('../middleware/decoder');

// res.set('Access-Control-Allow-Origin', '*');

exports.devices = async (req, res, next) => {
    console.log("querying devices");
    const queryResult = await Client.query({query: gql(getDevices)});
    res.json(queryResult.data.devices);
}

exports.deviceRecords = async (req, res, next) => {
    console.log("querying device records");
    const imei = req.params.imei;
    const queryResult = await Client.query({query: gql(deviceRecords), variables: {imei: imei}});
    const decodedTelemetry = decoder.decodeTelemetry(queryResult.data.deviceRecords);
    res.json(decodedTelemetry);
}