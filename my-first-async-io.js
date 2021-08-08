const fs = require('fs');

const [,,...args] = process.argv;
const file =  args[0];
fs.readFile(file, 'utf-8', (err, data) => {
  if (!err) {
    const lines = data.split('\n').length - 1;
    console.log(lines);
  } else {
    console.log(err.message);
  }
})