const express = require('express');

const router = express.Router();


// Post
//  http://localhost:5000/api/user/journey/dhaka-rangpur
router.post('/:from-:to', (req, res) => {
  res.status(200).json({ journey: `Form ${req.params.from} to ${req.params.to}` });
});

module.exports = router;
