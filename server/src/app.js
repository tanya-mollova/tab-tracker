const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
console.log('test')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.get('/', (req,res) => {
    res.send('hello')
})
app.post('/register',(req,res)=>{
    res.send({
        message:`Hello ${req.body.email}. Your user was registered. Have fun!`
    })
})
var listener = app.listen(8081, function(){
    console.log('Listening on port ' + listener.address().port); 
});

