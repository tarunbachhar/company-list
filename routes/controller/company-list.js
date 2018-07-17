var Company = require('../../models/company')

module.exports.companyGetAll = function(req,res){
    let offset = 0;
    let count = 5;
    let maxCount = 10;

    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset,10)
    }

    if(req.query && req.query.count){
        count = parseInt(req.query.count,10)
    }

    if(isNaN(offset) || isNaN(count)){
        res
         .status(400)
         .json({
             'message':'If supplied in querystring count and offset should be number'
         })
         return ;
     }

     if(count> maxCount){
        res
          .status(400)
          .json({
              "message":"Count limit of "+ maxCount + " exceeded"
          })
        return ;  
    }

    Company
     .find()
     .skip(offset)
     .limit(count)
     .exec(function(err,companies){
            if(err){
                console.log('Error Finding Companies')
                res
                 .status(500)
                 .json(err)
            }
            else {
                console.log('Found Companies ',companies.length)
                res
                 .status(200)
                 .json(companies)
            }
     })
}

module.exports.companyGetOne = function(req,res){
    let companyId = req.params.companyId

    Company
     .findById(companyId)
     .exec(function(err,company){
          let response = {
              status:200,
              message:company
          }
          if(err){
              console.log('Error finding company')
              response.status=500,
              response.message=err
          }
          else if(!company){
              response.status = 404;
              response.message = {
                 "message": "Company not exist"
              }
          }
          console.log("Found OneCompany")
          res
           .status(response.status)
           .json(response.message)
     })
}

module.exports.companyAddOne = function(req,res){
    Company
     .create({
         name:req.body.name,
         location:req.body.location
     },function(err,company){
         if(err){
             console.log("Error creating company")
             res
              .status(400)
              .json(err)
         }
         else {
             console.log('Hotel created')
             res
              .status(200)
              .json(company)
         }
     })
}

module.exports.companyUpdateOne = function(req,res){
    let companyId = req.params.companyId

    Company
     .findById(companyId)
     .exec(function(err,company){
         const response = {
             status : 200,
             message : company
         }
         if(err){
             console.log('Error finding hotel')
              response.status = 500;
              response.message = err
              return;
         }
         else if(!company){
            response.status = 404;
            response.message = {
                "message":"Company do not exist "+companyId
            }
            return ;
         }

         company.name = req.body.name;
         company.location = req.body.location;


         company
          .save(function(err,companyUpdate){
              if(err){
                  response.status = 500;
                  response.message =err
              }
              else {
                   res
                    .status(204)
                    .json()
              }
          })
     })
}

module.exports.companyDeleteOne =function(req,res){
    let companyId = req.params.companyId
    
    Company
     .findByIdAndRemove(companyId)
     .exec(function(err,company){
         if(err){
             res
              .status(404)
              .json(err)
         }
         else {
             console.log('Company deleted, Id :',companyId)
             res
              .status(204)
              .json()
         }
     })
}