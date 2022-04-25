const express = require('express')
const cors = require('cors')
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.port || 4000;

app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
    res.send('running sadik node')
})

//dbuser1

//PDeBZ0RfTTaQPs5d



const uri = "mongodb+srv://dbuser1:PDeBZ0RfTTaQPs5d@cluster0.jkugq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("foodExpress").collection("users ");
//     console.log('db connected')
//     // perform actions on the collection object
//     client.close();
// });
async function run() {
    try {
        await client.connect()
        const collection = client.db("foodExpress").collection("users ");
        const user = {
            name: 'abul khan',
            email: 'sakibabul@gmail.com'
        }
        const result = await collection.insertOne(user);
        console.log(`user inserted ${result.insertedId}`)
    }
    finally {
        await client.close()
    }
}

run().catch(console.dir)


app.listen(port, () => {
    console.log('Crud server running')
})

