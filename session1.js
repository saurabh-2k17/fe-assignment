function checkPrime(number){
    if (number <= 1) {
        return false;
    }
    for(let index=2; index < number; index++) {
        if (number % i === 0) {
            return false;
        }
    }
}

const userInput = 13; 
if (isPrime(userInput)) {
    console.log(userInput + ' is a prime number.');
  } else {
    console.log(userInput + ' is not a prime number.');
  }