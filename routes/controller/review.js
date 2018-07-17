var Company = require('../../models/company')

module.exports.reviewsGetAll = function(req,res){
    let id= req.params.companyId

    console.log('GET reviews for companyId', id)

    Company
     .findById(id)
     .select('reviews')
     .exec(function(err,doc){
         let response = {
             status:200,
             message:[]
         }

         if(err){
             console.log("Error finding hotel");
             response.status = 500;
             response.message =err;
         }
          else if(!doc){
              response.status = 404;
              response.message = {
                  "message":"company not found ",id
              }
          } else {
              response.message = doc.reviews ? doc.reviews : [];
          }
          res
           .status(response.status)
           .json(response.message)
     })
}

let addReview =function(req,res,company){
    company.reviews.push({
        name:req.body.name,
        rating:req.body.rating,
        subject:req.body.subject,
        body:req.body.body
    })

    company
     .save(function(err,companyUpdated){
         if(err){
             res
              .status(500)
              .json(err)
         }
         else {
             res
              .status(200)
              .json(companyUpdated.reviews[companyUpdated.reviews.length-1])
         }
     })
}

module.exports.reviewsAddOne = function(req,res){
    let id = req.params.companyId

    console.log('POST review to companyId ',id)

    Company
     .findById(id)
     .select('reviews')
     .exec(function(err,doc){
         let response =  {
             status:200,
             message:doc
         }
         if(err){
             console.log('Error finding Company')
             response.status = 500;
             response.message =err;
         }
         else  if(!doc){
            console.log('Company not found ',id)
            response.status = 404,
            response.message = {
                "message":"Company not found ",id
            }
         }
         if(doc){
            addReview(req,res,doc)
         }
         else {
             res
              .status(response.status)
              .json(response.message)
         }
     })
}

module.exports.reviewsGetOne = function(req,res){
    let companyId = req.params.companyId
    let reviewId = req.params.reviewId;

    console.log('GET reviewID '+reviewId, 'for')

    Company
     .findById(companyId)
     .select('reviews')
     .exec(function(err,company){
         let response = {
             status:200,
             message:[]
         }

         if(err){
             console.log('Error finding company')
             response.status = 500;
             response.message = err
         }
         else if(!company){
            console.log('Compay id not found in database ',companyId)
            response.status=404;
            response.message = {
                "message":"Company id not found ",companyId
            }
         }
         else {
             response.message = company.reviews.id(reviewId)

             if(!response.message){
                 response.status = 404;
                 response.message ={
                     "message": "Review id not found ",reviewId
                 }
             }
         }
         res
          .status(response.status)
          .json(response.message)
     })
}

module.exports.reviewsUpdateOne = function(req,res){
    let companyId = req.params.companyId
    let reviewId = req.params.reviewId

    Company
     .findById(companyId)
     .select('reviews')
     .exec(function(err,company){
         let thisReview
         let response = {
             status:200,
             message:{}
         }

         if(err){
             console.log('Error finding hotel')
             response.status = 500;
             response.message = err;
         }
         else if(!company){
             console.log('Company id not found in database ',id)
             response.status = 404;
             response.message = {
                 "message":"Company Id not found "+id
             }

         }
         else {
             thisReview = company.reviews.id(reviewId)

             if(!thisReview){
                 response.status = 404
                 response.message={
                     "message":"Review  ID not found "+reviewId
                 }
             }
         }

         if(response.status !== 200){
             res
              .status(response.status)
              .json(response.message)
         }
         else {
             thisReview.name = req.body.name
             thisReview.rating =req.body.rating
             thisReview.subject = req.body.subject
             thisReview.body = req.body.body
             company.save(function(err,companyUpdated){
                if (err) {
                    res
                      .status(500)
                      .json(err);
                  } else {
                    res
                      .status(204)
                      .json();
                  }
             })
         }
     })
}


module.exports.reviewsDeleteOne = function(req,res){
    let companyId = req.params.companyId
    let reviewId = req.params.reviewId

    Company
     .findById(companyId)
     .select('reviews')
     .exec(function(err,company){
         let thisReview
         let response = {
             status:200,
             message:{}
         }

         if(err){
             console.log('Error finding hotel')
             response.status = 500;
             response.message = err;
         }
         else if(!company){
             console.log('Company id not found in database ',id)
             response.status = 404;
             response.message = {
                 "message":"Company Id not found "+id
             }

         }
         else {
             thisReview = company.reviews.id(reviewId)

             if(!thisReview){
                 response.status = 404
                 response.message={
                     "message":"Review  ID not found "+reviewId
                 }
             }
         }
         if (response.status !== 200) {
            res
              .status(response.status)
              .json(response.message);
          }

          else {
              company.reviews.id(reviewId).remove()
              company.save(function(err,hotelUpdate){
                  if(err){
                      res
                       .status(500)
                       .json(err)
                  } else {
                      res
                       .status(204)
                       .json()
                  }
              })
          }

        })
}