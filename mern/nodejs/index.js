const express = require('express');
const http = require ('http');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors')

const productRouter = require('./routes/productRouter');
//const hostname = 'localhost'
//const hostname = '192.168.100.149'
const hostname = '172.16.8.71'
//const hostname = '192.168.18.48'

const port = 3000

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

app.use('/products', productRouter);
app.use(express.static(__dirname+'/public'))

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is express server</h1></body></html>');
})

const server = http.createServer(app)

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});