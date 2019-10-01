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

// router.post('/filters/search', function (req, res) {
//
//   if (req.session.data['search'].includes('poverty'))  {
//     res.redirect('/filters/search-all')
//   } else if (req.session.data['search'].includes('Poverty'))  {
//     res.redirect('/filters/search-all')
//   } else if (req.session.data['search'].includes('deprivation'))  {
//     res.redirect('/filters/search-all')
//   } else if (req.session.data['search'].includes('Deprivation'))  {
//     res.redirect('/filters/search-all')
//   } else if (req.session.data['search'].includes('free school meals'))  {
//     res.redirect('/filters/search-fsm')
//   } else if (req.session.data['search'].includes('fsm'))  {
//     res.redirect('/filters/search-fsm')
//   } else if (req.session.data['search'].includes('Free school meals'))  {
//     res.redirect('/filters/search-fsm')
//   } else if (req.session.data['search'].includes('socio-economic'))  {
//     res.redirect('/filters/search-all')
//   } else if (req.session.data['search'].includes('socioeconomic'))  {
//     res.redirect('/filters/search-all')
//   } else if (req.session.data['search'].includes('Socio-economic'))  {
//     res.redirect('/filters/search-all')
//   } else if (req.session.data['search'].includes('Socioeconomic'))  {
//     res.redirect('/filters/search-all')
//   } else if (req.session.data['search'].includes('IDACI'))  {
//     res.redirect('/filters/search-idaci')
//   } else if (req.session.data['search'].includes('idaci'))  {
//     res.redirect('/filters/search-idaci')
//   } else if (req.session.data['search'].includes('low'))  {
//     res.redirect('/filters/search-idaci')
//   } else if (req.session.data['search'].includes('income'))  {
//     res.redirect('/filters/search-idaci')
//   } else {
//     res.redirect('/filters/no-results')
//   }
// })

router.post('/journey1/search', function (req, res) {

  if (req.session.data['search'].includes('ks1'))  {
    res.redirect('/journey1/search-ks1')
  } else if (req.session.data['search'].includes('KS1'))  {
    res.redirect('/journey1/search-ks1')
  } else if (req.session.data['search'].includes('KS1_97-98_to_17-18.APS'))  {
    res.redirect('/journey1/search-ks1')
  } else if (req.session.data['search'].includes('science'))  {
    res.redirect('/journey1/search-ks1')
  } else if (req.session.data['search'].includes('attainment'))  {
    res.redirect('/journey1/search-ks1')
  } else if (req.session.data['search'].includes('KS4'))  {
    res.redirect('/journey1/search-ks4')
  }  else if (req.session.data['search'].includes('ks4'))  {
    res.redirect('/journey1/search-ks4')
  } else if (req.session.data['search'].includes('gcse'))  {
    res.redirect('/journey1/search-ks4')
  }  else if (req.session.data['search'].includes('GCSE'))  {
    res.redirect('/journey1/search-ks4')
  } else if (req.session.data['search'].includes('equivalent'))  {
    res.redirect('/journey1/search-ks4')
  } else if (req.session.data['search'].includes('average'))  {
    res.redirect('/journey1/search-all')
  } else if (req.session.data['search'].includes('key stage'))  {
    res.redirect('/journey1/search-all')
  } else if (req.session.data['search'].includes('point'))  {
    res.redirect('/journey1/search-all')
  } else if (req.session.data['search'].includes('score'))  {
    res.redirect('/journey1/search-all')
  } else if (req.session.data['search'].includes('lea'))  {
    res.redirect('/journey1/search-lacode')
  } else if (req.session.data['search'].includes('LEA'))  {
    res.redirect('/journey1/search-lacode')
  } else if (req.session.data['search'].includes('local'))  {
    res.redirect('/journey1/search-lacode')
  } else if (req.session.data['search'].includes('authority'))  {
    res.redirect('/journey1/search-lacode')
  } else if (req.session.data['search'].includes('code'))  {
    res.redirect('/journey1/search-lacode')
  } else if (req.session.data['search'].includes('establishment'))  {
    res.redirect('/journey1/search-lacode')
  } else if (req.session.data['search'].includes('pupil'))  {
    res.redirect('/journey1/search-lacode')
  } else if (req.session.data['search'].includes('postcode'))  {
    res.redirect('/journey1/search-lacode')
  } else {
    res.redirect('/journey1/no-results')
  }
})


module.exports = router
