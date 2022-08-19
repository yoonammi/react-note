import AWS from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";

const accessKeyId = ;
const secretAccessKey = ;

const s3 = new AWS.S3({ accessKeyId, secretAccessKey });
const bucket = "nepp-insta";

const config = {
  s3,
  bucket,
  acl: "public-read",
  metaData: (req, file, cb) => {
    cb(null, { fieldName: file.filedname });
  },
  key: (req, file, cb) => {
    cb(null, `image/${Date.now().toString()}/${file.originalname}`);
  },
};

const upload = multer({ storage: multerS3(config) });

export default upload;
