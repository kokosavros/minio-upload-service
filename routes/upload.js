var express = require('express');
var router = express.Router();
var Minio = require('minio')
var multer  = require('multer')

router.post('/', multer({storage: multer.memoryStorage()}).single("upload"),  (req, res, next) => {
  var minioClient = new Minio.Client({
      endPoint: 'minio-server',
      port: 9000,
      secure: false,
      accessKey: process.env.MINIO_ACCESS_KEY,
      secretKey: process.env.MINIO_SECRET_KEY
  });

  minioClient.putObject('test', req.files.file.name, req.files.file.data, 'application/octet-stream', function(err, etag) {
    if (err) return console.log(err)
    console.log('File uploaded successfully.')
  });
  res.json({file: 'ok'});
  res.end();
});

module.exports = router;
