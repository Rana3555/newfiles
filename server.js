const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/first-app'));
app.get('/*', function(_req, res)

    { res.sendFile(path.join(__dirname + '/dist/first-app')); });

app.listen(process.env.PORT || 8000);