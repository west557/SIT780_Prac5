// index.js
'use strict';

const express = require('express');
const os = require('os');

// Constants
constPORT= 8080;
constHOST= '0.0.0.0';
const name = process.env.name || "World"

// App
constapp= express();
app.get('/', (req, res) =>{
    //print host name
    res.send(`Hello from ${os.hostname()}!`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);