//Filter Method
let arr = [10, 20, 30, 40, 50];
let op = arr.filter((number) => number > 20);
console.log(op);

let mobile = [
{ name: "iphone", brand: "Apple", country: "US"},
{ name: "galaxy", brand: "Samsung", country: "KOREA" },
{ name: "poco", brand: "MI", country: "China" },
{ name: "iphone", brand: "Apple", country: "US"},
];
let filteredData = mobile.filter((value) => value.brand != "Apple");
console.log(filteredData);


let transaction = [
{ status: "FAILED", product: "Phone", vaue: 2000},
{ status: "SUCCESS", product: "Charger", vaue: 200 },
{ status: "FAILED", product: "Smartwatch", vaue: 300},
{ status: "FAILED", product: "Shoes", vaue: 5000},
{ status: "SUCCESS", product: "Phone", value: 2000 },
{ status: "SUCCESS", product: "Phone", value: 2000},
 ];
let finop = transaction.filter((value) => value.status == "SUCCESS");
console.log(finop);


//Map Method
let arr1 = [10, 20, 30, 40, 50];
let value = arr.map((num) => num * 20);
console.log(value);

let mobile1 = [
{ name: "iphone", brand: "Apple", country: "US"},
{ name: "galaxy", brand: "Samsung", country: "KOREA" },
{ name: "poco", brand: "MI", country: "China" },
{ name: "iphone", brand: "Apple", country: "US"},
];
let mapdata  = mobile.map((value) => console.log("Value data",value));


let transaction1 = [
{ status: "FAILED", product: "Phone", vaue: 2000},
{ status: "SUCCESS", product: "Charger", vaue: 200 },
{ status: "FAILED", product: "Smartwatch", vaue: 300},
{ status: "FAILED", product: "Shoes", vaue: 5000},
{ status: "SUCCESS", product: "Phone", vaue: 2000 },
{ status: "SUCCESS", product: "Phone", vaue: 2000},
 ];
let mapop = transaction.map((value) => `Product is ${value.product} == "SUCCESS") Amount${value.vaue}`,);
console.log(mapop);

//Reduce Method

let scores = [72, 65, 92, 35, 92, 90];
let final = scores.reduce((acc, value) => acc + value, 0);
// second argument holds accumulator initial value
console.log("total score:", final);

let mobile3 = [
{ name: "iphone", brand: "Apple", price: 10000, country: "US"},
{ name: "galaxy", brand: "Samsung", price: 4000, country: "KOREA" },
{ name: "poco", brand: "MI", price: 2000, country: "China" },
{ name: "iphone", brand: "Apple", price: 3000, country: "US"},
];
let totalvalue = mobile.reduce((acc, value) => acc + value.price, 0);
console.log("total value", totalvalue);