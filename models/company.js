var mongoose = require('mongoose')
var Schema = mongoose.Schema


 const reviewSchema = new Schema({
     name:{
         type:String,
         required:true
     },
     rating:{
         type:Number,
         min:0,
         max:5,
         required:true
     },
     subject:{
         type:String,
         required:true
     },
     body:{
         type:String,
         required:true
     },
     date:{
         type:Date,
         default:new Date().toLocaleDateString()
     }
 })

const CompanySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    reviews:[reviewSchema]
})

module.exports = Company = mongoose.model('company',CompanySchema)