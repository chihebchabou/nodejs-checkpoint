const fs = require('fs');

const list = (dir, extension, callback) => {
  fs.readdir(dir, (err, files) => {
    if (!err && files.length) {
      const filteredFiles = files.filter(file => file.endsWith('.' + extension))
      callback(null, filteredFiles)
    } else {
      callback(err || "empty directory");
    }
  })
}

module.exports = list