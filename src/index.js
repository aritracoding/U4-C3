const express = require('express');
const connect = require('./config/db');

const app = express();

app.use(express.json());
app.listen(3000,async(function() {
    try {
        await connect()
        console.log('listening on port 3000')
    }
    catch(err){
        console.log('err')
    }
}));