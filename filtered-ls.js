const fs = require('fs');

const [,,...args] = process.argv;

const [dir, extension] = args;

fs.readdir(dir, (err, files) => {
  if (!err && files.length) {
    const filteredFiles = files.filter(file => file.endsWith('.' + extension))
    filteredFiles.forEach(file => console.log(file))
  } else {
    console.log(err || "empty directory");
  }
})