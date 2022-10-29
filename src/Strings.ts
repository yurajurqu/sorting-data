export class Strings {

    constructor(public str: string){

    }

    get length(): number {
        return this.str.length;
    }

    compare(leftIndex: number, rightIndex: number){
        return this.str[leftIndex].toLocaleLowerCase() > this.str[rightIndex].toLocaleLowerCase();
    }

    swap2(leftIndex: number, rightIndex: number){
        let leftArg = this.str[leftIndex];
        let rightArg = this.str[rightIndex];
        this.str = this.str.substring(0,leftIndex) + rightArg + leftArg+ this.str.substring(rightIndex+1) ;  
    }

    swap(leftIndex: number, rightIndex: number){
        const letters = [...this.str];
        const leftArg = letters[leftIndex];
        letters[leftIndex] =letters[rightIndex];
        letters[rightIndex]= leftArg;
        this.str = letters.join('');
    }
}