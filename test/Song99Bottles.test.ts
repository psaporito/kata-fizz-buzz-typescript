import Song99Bottles from "../src/Song99Bottles";
const Song99BottlesClass = new Song99Bottles();

describe('99 bottles', function (): void {

    it('triangolazione case', (): void => {

        const result: string[] = Song99BottlesClass.song(99,1);
        expect(result[0]).toBe('99 bottles of beer on the wall, 99 bottles of beer. Take one down and pass it around, 98 bottles of beer on the wall.');

        const result2: string[] = Song99BottlesClass.song(98,1);
        expect(result2[0]).toBe('98 bottles of beer on the wall, 98 bottles of beer. Take one down and pass it around, 97 bottles of beer on the wall.');

        const result3: string[] = Song99BottlesClass.song(3,1);
        expect(result3[0]).toBe('3 bottles of beer on the wall, 3 bottles of beer. Take one down and pass it around, 2 bottles of beer on the wall.');
    });

    it('should return array length', function (): void {
        const result: string[] = Song99BottlesClass.song(99,5);
        expect(result.length).toBe(5);

        const result1: string[] = Song99BottlesClass.song(99,10);
        expect(result1.length).toBe(10);

        const result2: string[] = Song99BottlesClass.song(99,3);
        expect(result2.length).toBe(3);
    })

    it('should return right strings', function (): void {
        const result: string[] = Song99BottlesClass.song(99,5);
        const expectedResut = [
            '99 bottles of beer on the wall, 99 bottles of beer. Take one down and pass it around, 98 bottles of beer on the wall.',
            '98 bottles of beer on the wall, 98 bottles of beer. Take one down and pass it around, 97 bottles of beer on the wall.',
            '97 bottles of beer on the wall, 97 bottles of beer. Take one down and pass it around, 96 bottles of beer on the wall.',
            '96 bottles of beer on the wall, 96 bottles of beer. Take one down and pass it around, 95 bottles of beer on the wall.',
            '95 bottles of beer on the wall, 95 bottles of beer. Take one down and pass it around, 94 bottles of beer on the wall.'
        ]
        expect(result).toEqual(expectedResut)
    })

    it('should return right strings starting from 5', function (): void {
        const result: string[] = Song99BottlesClass.song(5,3);
        const expectedResut = [
            '5 bottles of beer on the wall, 5 bottles of beer. Take one down and pass it around, 4 bottles of beer on the wall.',
            '4 bottles of beer on the wall, 4 bottles of beer. Take one down and pass it around, 3 bottles of beer on the wall.',
            '3 bottles of beer on the wall, 3 bottles of beer. Take one down and pass it around, 2 bottles of beer on the wall.',
        ]
        expect(result).toEqual(expectedResut)
    })

    it('should return right nouns plurarls/singular starting from 2', function (): void {
        const result: string[] = Song99BottlesClass.song(2,1);
        const expectedResut = [
            '2 bottles of beer on the wall, 2 bottles of beer. Take one down and pass it around, 1 bottle of beer on the wall.',
        ]
        expect(result).toEqual(expectedResut)
    })

    // 1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.
    // No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.
});