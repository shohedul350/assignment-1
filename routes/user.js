const express = require('express');

const router = express.Router();


// Post
//  api/user/post
router.post('/post', (req, res) => {
  res.status(200).json({ message: 'Post Successfully', post: req.body });
});

// Get single post
//  api/user/Get
router.get('/get/:id', (req, res) => {
  console.log(req.params);
  res.status(200).json({ message: 'Get User Data' });
});

// Get All post
//  api/user/getAll
router.get('/getall/', (req, res) => {
  res.status(200).json({ message: 'Get All User Data' });
});

// delete
//  api/user/delete
router.delete('/delete/:id', (req, res) => {
  res.status(200).json({ message: `Delete Successfully ${req.params.id}` });
});

module.exports = router;
