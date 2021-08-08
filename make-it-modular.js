const mymodule = require('./mymodule');

const [,,...args] = process.argv;

const [dir, extension] = args;

mymodule(dir, extension, (err, data) => {
  if (!err && data.length) {
    data.forEach(file => console.log(file))
  } else {
    console.log(err);
  }
})