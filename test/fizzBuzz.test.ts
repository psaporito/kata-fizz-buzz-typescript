import FizzBuzz from "../src/fizzBuzz";
const FizzBuzzClass = new FizzBuzz();

describe('sample test set', function (): void {

  it('sample test', (): void => {

    var result: boolean = FizzBuzzClass.handle();

    var expected = true;
    expect(result).toBe(expected);
  });

});