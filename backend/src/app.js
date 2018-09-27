const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('combined'))

app.get('/', (req, res)=>{
    res.send({"msg":"looks like the server works!"})
})

app.listen(3000);