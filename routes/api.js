'use strict';
const express = require('express');

exports.devices = (req, res, next) => {
    res.json({"devices": "devices"})
}