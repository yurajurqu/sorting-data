export class Numbers {
    constructor(public number: number[]){}

    compare(indexLeft: number, indexRight: number): boolean {
        return this.number[indexLeft]> this.number[indexRight];
    }
    
    swap(indexLeft:number, indexRight: number): void {
        const leftArg = this.number[indexLeft];
        this.number[indexLeft] = this.number[indexRight];
        this.number[indexRight] = leftArg;
    }

    get length(): number {
        return this.number.length;
    }

}