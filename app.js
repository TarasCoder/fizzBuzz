// FizzBuzz
let till = 100;
let result = [];
let number;

function fizzBuzz(number){
  for(let i = 1; i <= number; i++){
    if (((i % 3) == 0) && ((i % 5) == 0)) {
      result.push("FizzBuzz");
    } else if (i % 3 == 0){
      result.push("Fizz");
    } else if (i % 5 == 0) {
      result.push("Buzz");
    } else {
      result.push(i);
  }  
  }
  result.forEach(el =>{
    console.log(el);
  })
}
fizzBuzz(till);
