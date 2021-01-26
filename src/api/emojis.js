const express = require('express');
const storage = require('../services/firebase/storage');
const router = express.Router();

router.get('/', async (req, res)  => { 
  const respon = await storage.upload('hello.txt', {
    destination : 'wakanda/hello-newfiles.txt'
  });
  res.json(respon);
});

module.exports = router;
