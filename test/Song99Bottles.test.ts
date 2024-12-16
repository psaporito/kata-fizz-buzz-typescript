import Song99Bottles from "../src/Song99Bottles";
const Song99BottlesClass = new Song99Bottles();

describe('99 bottles', function (): void {

    it('triangolazione case', (): void => {

        const result: string[] = Song99BottlesClass.handle(99,1);
        expect(result[0]).toBe('99 bottles of beer on the wall, 99 bottles of beer. Take one down and pass it around, 98 bottles of beer on the wall.');

        const result2: string[] = Song99BottlesClass.handle(98,1);
        expect(result2[0]).toBe('98 bottles of beer on the wall, 98 bottles of beer. Take one down and pass it around, 97 bottles of beer on the wall.');

        const result3: string[] = Song99BottlesClass.handle(91,1);
        expect(result3[0]).toBe('91 bottles of beer on the wall, 91 bottles of beer. Take one down and pass it around, 90 bottles of beer on the wall.');
    });

    it('should return array length', function (): void {
        const result: string[] = Song99BottlesClass.handle(99,5);
        expect(result.length).toBe(5);

        const result1: string[] = Song99BottlesClass.handle(99,10);
        expect(result1.length).toBe(10);

        const result2: string[] = Song99BottlesClass.handle(99,3);
        expect(result2.length).toBe(3);
    })


});