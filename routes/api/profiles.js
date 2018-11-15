const express = require('express');
const router = express.Router();

// @route GET api/profiles/test
// @desc tests profiles route
router.get('/test', (req, res) => res.json({
  msg: 'Profiles Works'
}));

module.exports = router;