class Song99Bottles {
    song(startNumber: number, length: number): string[] {

        // Old Code        
        // for (let i = 0; i < length; i++) {
        //     const bottles = startNumber -i;
        //     const bottles_next = bottles - 1;
        //     array_result.push(`${this.bottlesOnTheWall(bottles)}, ${this.bottlesOfBeer(bottles)}. ${this.toTheStore(bottles_next)}, ${this.bottlesOnTheWall(bottles_next)}.`);
        // }

        const array_result = this.writeRow(startNumber, [])
        return array_result;
    }

    writeRow(beers: number, array_result: string[]): string[]{
        array_result.push(`${this.bottlesOnTheWall(beers)}, ${this.bottlesOfBeer(beers)}. ${this.toTheStore(beers-1)}, ${this.bottlesOnTheWall(beers-1)}.`);
        if( beers > 0)
            return this.writeRow(beers-1, array_result)
        return array_result
    }


    bottlesOnTheWall(bottles: number) {
        return `${this.bottlesOfBeer(bottles)} on the wall`
    }

    bottlesOfBeer(bottles: number) {
        if (bottles === 1) {
            return `${bottles} bottle of beer`
        }
        if (bottles === 0) {
            return 'no more bottles of beer';
        }
        if(bottles === -1) {
            return `99 bottles of beer`
        }

        return `${bottles} bottles of beer`
    }

    toTheStore(bottles: number) {
        if (bottles > -1) {
            return 'Take one down and pass it around';
        }
        return 'Go to the store and buy some more';
    }
}

export default Song99Bottles;