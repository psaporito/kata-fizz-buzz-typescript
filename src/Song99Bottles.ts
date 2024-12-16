class Song99Bottles {
    handle(startNumber: number,length: number): string[] {

        const array_result = [];
        for(let i=0; i< length; i++){
            const bottles= startNumber - i;
            const bottles_next = bottles - 1;
           array_result.push(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take one down and pass it around, ${bottles_next} bottles of beer on the wall.`);
        }

        return array_result;
    }
}

export default Song99Bottles;