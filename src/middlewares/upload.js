const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, callback) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

const uploadSingle = (fieldName) => {
  return (req, res, next) => {
    const uploadItem = upload.single(fieldName);
   console.log(fieldName)
    uploadItem(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        res.send({ message: err.message, errorType: "MulterError" });
      } else if (err) {
        res.send({ message: err.message, errorType: "NormalError" });
      }

      next();
    });
  };
};

const uploadMultiple = (fileCount, fieldName) => {
  return (req, res, next) => {
    const uploadItems = upload.array(fieldName, fileCount);

    uploadItems(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res
          .status(400)
          .send({ message: err.message, errorType: "MulterError" });
      } else if (err) {
        return res
          .status(400)
          .send({ message: err.message, errorType: "NormalError" });
      }

      next();
    });
  };
};

module.exports = { uploadSingle, uploadMultiple };
