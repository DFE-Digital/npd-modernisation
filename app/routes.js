const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/funnel/dependant-variables', function (req, res) {

  if (req.session.data['variables1'].includes('Risk')) {
    res.redirect('/funnel/bespoke/dependant-variables')
  } else {
    res.redirect('/funnel/dependant-variables')
  }
})

module.exports = router
