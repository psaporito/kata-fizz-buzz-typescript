/*
Write a program that prints all the numbers from 1 to 100, but with some exceptions:

for all numbers that are multiples of 3, print “Fizz” instead of the number itself
for all numbers that are multiples of 5, print “Buzz” instead of the number itself
for all numbers that are multiples of both 3 and 5, print “FizzBuzz” instead of the number itself
 */
class FizzBuzz {

    handle(value:number): string {
        if(value % 3 === 0) {
            return 'Fizz';
        } else{
            return String(value);
        }
    }
}

export default FizzBuzz;