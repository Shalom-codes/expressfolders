const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("Shalom Shaapera");
});

app.listen(3000);