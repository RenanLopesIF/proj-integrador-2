import multer from 'multer';

export default multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/uploads/event`);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
