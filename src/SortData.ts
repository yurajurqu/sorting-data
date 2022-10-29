import { Numbers } from "./Numbers";

interface SortingProps {
    length: number;
    compare(indexLeft:number, indexRight: number): boolean;
    swap(indexLeft:number, indexRight: number) : void;
}

export class SortData {

    constructor(public data: SortingProps) {
    }

    sort(): void {
        const { length } = this.data;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.data.compare(j,j+1)) {
                    this.data.swap(j,j+1);
                }
            }
        }

    }
}
