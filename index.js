const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send({hi: 'there'});
    console.log("Connected successful");
});

app.listen(5000);