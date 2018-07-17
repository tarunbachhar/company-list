const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const company = require('./routes/api/company')
const path = require('path')

const app = express()

// Body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//db config
const db = require('./config/key').mongoURI

//connect db

mongoose
.connect(db)
.then(()=>console.log("Mongo db connected"))
.catch((err)=>console.log(err))

//use routes
app.use('/api',company)

// Serve static assests if in production
if(process.env.NODE_ENV === 'production'){
    // Set Static folder
    app.use(express.static('client/build'))

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

const port = process.env.PORT || 5000

app.listen(port,()=>console.log(`Server started on Port ${port}`))