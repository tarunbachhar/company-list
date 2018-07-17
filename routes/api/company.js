const express = require('express')
const router = express.Router()
const ctrlCompanies = require('../controller/company-list.js')
const ctrlReviews = require('../controller/review.js')

//company
router
 .route('/companies')
 .get(ctrlCompanies.companyGetAll)
 .post(ctrlCompanies.companyAddOne)

router
 .route('/companies/:companyId')
 .get(ctrlCompanies.companyGetOne)
 .put(ctrlCompanies.companyUpdateOne)
 .delete(ctrlCompanies.companyDeleteOne)



//reviews
router
 .route('/companies/:companyId/reviews')
 .get(ctrlReviews.reviewsGetAll)
 .post(ctrlReviews.reviewsAddOne)

 router
  .route('/companies/:companyId/reviews/:reviewId')
  .get(ctrlReviews.reviewsGetOne)
  .put(ctrlReviews.reviewsUpdateOne)
  .delete(ctrlReviews.reviewsDeleteOne)



module.exports = router