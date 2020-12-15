const express = require('express')
const morgan=require('morgan')
const app = express();
app.use(morgan('dev'))
app.get("/", (request, response) => {
    response.status(200).send('First Test');
});

app.get("/test", (request, response) => {
    response.status(500).send({ "message": "This is an error response" });
});
const PORT=5000
app.listen(PORT,(console.log( `server running on port:${PORT}`)))