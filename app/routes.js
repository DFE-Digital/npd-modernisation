const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/funnel/data-funnel-step9', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let highrisk = req.session.data['high-risk']

  if (highrisk === 'true') {
    res.redirect('/funnel/bespoke/bespoke-funnel-step9')
  } else {
    res.redirect('/funnel/data-funnel-step9')
  }
})

module.exports = router
