const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, next) => {
    next(null, './public/uploads/')
  },
  filename: (req, file, next) => {
    next(null, `${Date.now()}${path.extname(file.originalname)}`);
  }
});

const uploader = multer({ storage });
module.exports = uploader;