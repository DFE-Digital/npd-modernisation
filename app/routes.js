const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Bundles
router.post('/funnel/step-4', function (req, res) {

  if (req.session.data['variables3'].includes('Absence Exclusion'))  {
    res.redirect('/funnel/mixed/step-4')
  } else if (req.session.data['variables3'].includes('CIN'))  {
    res.redirect('/funnel/high/step-4')
  } else if (req.session.data['variables3'].includes('Special category pupils'))  {
    res.redirect('/funnel/significant/step-4')
  } else if (req.session.data['variables3'].includes('Personal'))  {
    res.redirect('/funnel/bespoke/step-4')
  } else {
    res.redirect('/funnel/step-4')
  }
})

// Matching Data

router.post('/new-form-v2/step-13', function (req, res) {

  let matching = req.session.data['matching-data']

  if (matching === 'false') {
    res.redirect('/new-form-v2/step-17')
  } else {
    res.redirect('/new-form-v2/step-13')
  }
})

module.exports = router
