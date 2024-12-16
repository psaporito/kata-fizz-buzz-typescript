import FizzBuzz from "../src/fizzBuzz";
const FizzBuzzClass = new FizzBuzz();

describe('fizzBuzz', function (): void {

  /**
   * Casi da gestire
   *  0,1,2 => return 0,1,2
   *  3,6,9 => return Fizz
   *  5,10,20 => return Buzz
   *  15,30,45 => return fizzBuzz
   *  99 => return Fizz
   *  100 => return Buzz
   */
  it('fizz', (): void => {

    var result: string = FizzBuzzClass.handle();

    expect(result).toBe('Fizz');
  });

});