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

// Search

router.post('/filters/search', function (req, res) {

  if (req.session.data['search'].includes('poverty'))  {
    res.redirect('/filters/search')
  } else if (req.session.data['search'].includes('Poverty'))  {
    res.redirect('/filters/search')
  } else if (req.session.data['search'].includes('deprivation'))  {
    res.redirect('/filters/search')
  } else if (req.session.data['search'].includes('Deprivation'))  {
    res.redirect('/filters/search')
  } else if (req.session.data['search'].includes('free school meals'))  {
    res.redirect('/filters/search')
  } else if (req.session.data['search'].includes('socio-economic'))  {
    res.redirect('/filters/search')
  } else if (req.session.data['search'].includes('socioeconomic'))  {
    res.redirect('/filters/search')
  } else if (req.session.data['search'].includes('Socio-economic'))  {
    res.redirect('/filters/search')
  } else if (req.session.data['search'].includes('Socioeconomic'))  {
    res.redirect('/filters/search')
  } else if (req.session.data['search'].includes('IDACI'))  {
    res.redirect('/filters/search')
  } else if (req.session.data['search'].includes('idaci'))  {
    res.redirect('/filters/search')
  } else if (req.session.data['search'].includes('low'))  {
    res.redirect('/filters/search')
  } else if (req.session.data['search'].includes('income'))  {
    res.redirect('/filters/search')
  } else {
    res.redirect('/filters/no-results')
  }
})

module.exports = router
