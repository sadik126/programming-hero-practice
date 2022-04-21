const express = require('express')
const app = express();
const port = process.env.port || 4000;


app.get('/', (req, res) => {
    res.send('running my node')
})

