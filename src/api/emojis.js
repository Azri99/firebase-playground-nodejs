const express = require('express');
const FirebaseStorage = require('../services/firebase/storage');
const router = express.Router();

router.get('/', async (req, res)  => { 
  const storage = new FirebaseStorage();
  const respon_upload = await storage.uploadFile('azure-firebase/', 'Erd.png');
  const respon_get = await storage.getUploadFiles();
  res.json(respon_get);

});

module.exports = router;
