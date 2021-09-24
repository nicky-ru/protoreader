'use strict';
const express = require('express');
const Client = require('../middleware/client');
const queries = require('../middleware/graphql/queries');
const getDevices = queries.getDevices;
const gql = require('graphql-tag');

exports.devices = async (req, res, next) => {
    console.log("querying devices");
    const queryResult = await Client.query({query: gql(getDevices)});
    res.json(queryResult.data.devices);
}