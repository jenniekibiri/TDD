const express = require('express')
const morgan=require('morgan')
const app = express();
app.use(morgan('dev'))
app.get('hello test',(req,res)=>{
    res.send('hello we have not forgot nodejs')
})
const PORT=5000
app.listen(PORT,(console.log( `server running on port:${PORT}`)))