const [,,...numbers] = process.argv;
let sum = 0
try {
  numbers.forEach(number => {
    sum += +number
  });
  if (isNaN(sum)) throw new Error('Only numbers are accepted as command-line arguments')
  console.log(sum);
} catch (error) {
  console.log(error.message)
}
