import multer from 'multer';
import path from 'path';

export default multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/uploads/user/profile`);
  },
  filename: function (req, file, cb) {
    const { userId } = req.params;
    cb(null, userId + path.extname(file.originalname));
  },
});
