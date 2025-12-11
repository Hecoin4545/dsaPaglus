const express = require('express');
const mongoose = require('mongoose');

async function connectionUrl(url){
    await mongoose.connect(url);
}

module.exports = {connectionUrl};