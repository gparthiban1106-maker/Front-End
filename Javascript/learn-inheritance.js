class Product
{
    constructor(name, color)
    {
    this.name=name;
    this.color=color;      
    }
    buyProduct()
    {
        console.log(`Buying Product`);
    }
}
class Mobile extends Product{
    buyProduct(){
        console.log(`Buying Mobile`);    
    }
}
let mobile=new Mobile("Iphone","Red");
console.log(mobile);
mobile.buyProduct();

