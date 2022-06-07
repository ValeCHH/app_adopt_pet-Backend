const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
  cloud_name: 'valechh', 
  api_key: '926791988734869', 
  api_secret: '9d6cNDgHkdzls-hUC_ZybLiCZjg' 
});

exports.uploads = (filePath) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(filePath, function (error, result) {
      if (error) reject(error);
      else resolve(result);
    });
  });
};
