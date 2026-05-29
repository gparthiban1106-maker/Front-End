let transaction={
    upiId:"gparthiban11@sbi",
    mobileno:"9900700665",
};
console.log(transaction.upiId);
console.log(transaction["upiId"]);

transaction['account']='ICICI'
console.log(transaction);

//Object method
console.log(Object.keys(transaction));
console.log(Object.values(transaction));

let obj1={
    name:"Parthiban",
    age:"23",
};
let obj2={
    name:"Bharathi",
    city:"Banglore",
};

Object.assign(obj1,obj2);
console.log(obj1);
console.log(obj2);


//ARRAY of OBJECT

let transactions=[  {upi:"a",num:"122",status:"Success"},
                    {upi:"b",num:"123",status:"FAILURE"},   
                    {upi:"c",num:"124",status:"FAILURE"},
                    {upi:"d",num:"125",status:"Success"},
                ];
console.log(transactions.length);
for ( let i=0;i<transactions.length;i++)
{   
    let newarr=[];
    if(transactions[i].status=="FAILURE"){
        newarr.push(transactions[i]);
    }
    console.log(newarr);
}


