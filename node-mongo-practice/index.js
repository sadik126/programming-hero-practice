const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.port || 4000;

app.use(cors());
app.get('/', (req, res) => {
    res.send('running my node')
})

app.listen(port, () => {
    console.log('Crud server running')
})

