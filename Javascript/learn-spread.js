//it is used to combine the array or object.

const numbers1=[1,2,3,];
const numbers2=[4,5,6];
const result=[...numbers1,40,50,...numbers2];
console.log(result);


const fruits=["Apple","Mango","Orange"];
const copiedFruits=[...fruits]
console.log(copiedFruits);

const employee={
    name:"David",
    role:"code",
};

const copiedEmployee={
    ...employee,
};

console.log(copiedEmployee);
