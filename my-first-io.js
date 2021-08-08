const fs = require('fs');

const [,,...args] = process.argv;
const file =  args[0];
try {
  const str = fs.readFileSync(file,'utf-8');
  const lines = str.split('\n').length - 1;
  console.log(lines);

} catch (error) {
  console.log(error.message);
}