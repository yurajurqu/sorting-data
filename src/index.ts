import { Numbers } from "./Numbers";
import { SortData } from "./SortData";
import { Strings } from "./Strings";

const dateArray = [
    new Date(2010,9,24),
    new Date(2035,9,24),
    new Date(2001,9,24),
    new Date(2029,9,24),
];

const years = dateArray.map((date)=>{
    return date.getFullYear();
});


const sortData = new SortData(new Numbers(years));
sortData.sort();
console.log(sortData.data);

const sortString = new SortData(new Strings("omar"));
sortString.sort();
console.log(sortString.data);