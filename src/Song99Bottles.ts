class Song99Bottles {
    song(startNumber: number,length: number): string[] {

        const array_result: string[] = [];
        for(let i=0; i< length; i++){
            const bottles= startNumber - i;
            const bottles_next = bottles - 1;
            if(bottles >= 2 )
                array_result.push(`${bottles} bottles of beer on the wall, ${bottles} ${bottles >= 2 ? 'bottles' : 'bottle'} of beer. Take one down and pass it around, ${bottles_next} ${bottles_next >= 2 ? 'bottles' : 'bottle'} of beer on the wall.`);
        }

        return array_result;
    }
}

export default Song99Bottles;