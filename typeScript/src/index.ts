let sales : number = 123_456_789;
let course : string = "TypeScript";
let is_published : boolean = true;

let level;

function render(document:any) {
    console.log(document);
}

//Arrays 
let numbers : number[] = [1,2,3];

//tuples
let user : [number, string] = [1, "satoripop"];

const enum Size{
    Small = 1,
    Medium = 2,
    Large = 3
}

let mySize : Size = Size.Small;
console.log(mySize)

function calculateTax(price : number, taxType : number) : number {
    if(taxType === 1) {
        return price * 0.1;
    }
    return price * 0.05;
}

calculateTax(10,1)

let employee : {
    readonly id: number,
    name: string
}= {
    id: 1,
    name: "satoripop"
}

