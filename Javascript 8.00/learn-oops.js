// class=blueprint of an object
// object=instance of class (or) collectioin of data storing key-value pair.
class Product //class
{
    constructor(name,color) //constructor
    {
        this.name=name;
        this.color=color;
    }
    buyproduct() //method
    {
        console.log(`product name:${this.name} product color:${this.color}`);       
    }
}
let value=new Product("Iphone","Red");
let data=new Product("Samsung","Black");
value.buyproduct();
data.buyproduct();

//class - blueprint of class
//instance fo class - using new keyword
//constuctor - initialize the class properties
