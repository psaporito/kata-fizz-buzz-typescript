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
  it('Fizz', (): void => {
    var result: string = FizzBuzzClass.handle(3);
    expect(result).toBe('Fizz');

    var result2: string = FizzBuzzClass.handle(6);
    expect(result2).toBe('Fizz');

    var result3: string = FizzBuzzClass.handle(12);
    expect(result3).toBe('Fizz');

    var result3: string = FizzBuzzClass.handle(18);
    expect(result3).toBe('Fizz');
  });

  it('Buzz', (): void => {
    var result3: string = FizzBuzzClass.handle(5);
    expect(result3).toBe('Buzz');

    var result3: string = FizzBuzzClass.handle(10);
    expect(result3).toBe('Buzz');

    var result3: string = FizzBuzzClass.handle(20);
    expect(result3).toBe('Buzz');
  })

  it('FizzBuzz',(): void => {
    var result3: string = FizzBuzzClass.handle(15);
    expect(result3).toBe('FizzBuzz');

    var result3: string = FizzBuzzClass.handle(30);
    expect(result3).toBe('FizzBuzz');

    var result3: string = FizzBuzzClass.handle(45);
    expect(result3).toBe('FizzBuzz');
  })

});