var i = 1;
while (i < 2){
    console.log(i);
    i++;
}

let output = [];
let num = 1;
function fizzBuzz() {

    while (num <= 100) {

        if (num % 3 === 0 && num % 5 === 0) {
            output.push('FizzBuzz')
        } else if (num % 5 === 0) {
            output.push('Buzz');
        } else if (num % 3 === 0) {
            output.push('Fizz')
        } else {
            output.push(num)
        }
        num = num + 1;
    }
    console.log(output);
}

fizzBuzz();
