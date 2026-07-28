let obj=
[
    {
        name:"David",
        city:"Bangalore",
    },
    {
        name:"Johnson",
        city:"Hydrabad",
    },
];
 let result=JSON.stringify(obj)
 let final=JSON.parse(result)
 console.log(result)
 console.log(final)

//stringify => convert into string
//parse => convert into array of object