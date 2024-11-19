const express = require('express');
const bodyParser = require('body-parser');

const productRouter = express.Router();

productRouter.use(bodyParser.json());

productRouter.route('/')
.all((req,res,next) => {
    console.log('got here 1');
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    console.log('got here 2');
    res.end('{"products": [{"productName":"aaaa","productDescription":"11111111111111111"},{"productName":"bbbb","productDescription":"22222222222222222"},{"productName":"cccc","productDescription":"33333333333333333"},{"productName":"dddd","productDescription":"44444444444444444"},{"productName":"eeee","productDescription":"55555555555555555"},{"productName":"ffff","productDescription":"66666666666666666"},{"productName":"gggg","productDescription":"77777777777777777"},{"productName":"hhhh","productDescription":"88888888888888888"},{"productName":"iiii","productDescription":"99999999999999999"},{"productName":"jjjj","productDescription":"00000000000000000"}]}');
})

module.exports = productRouter;