const router = require('express').Router()

router.route('/books')
  .get((req, res) => {
    res.send('Display all the books!')
  })

module.exports = router
