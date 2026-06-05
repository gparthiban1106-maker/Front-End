class user
{
    constructor (name,email)
    {
        this.name=name;
        this.email-email;
    }
    login()
    {
        console.log(`${this.name} Logged in`);
    }
    logout()
    {
        console.log(`${this.name}Logged Out`);
    }
}
class Customer extends user
{
    placeorder(fooditem){
        console.log(`${this.name} ordered ${fooditem}`);
    }
}
class DeliveryPartner extends user
{
    deliverorder(orderid)
    {
        console.log(`${this.name} delivered order ${orderid}`);
    }
}
class Admin extends user
{
    removerestaurant(restaurantname)
    {
        console.log(`${restaurantname} removed by ${this.name}`);
    }
}
const customer = new Customer("David","abc@gmail.com");

customer.login();
customer.placeorder("Pizza");

console.log("------------------");

const rider = new DeliveryPartner("Rahul","xyz@gmail.com");

rider.login();
rider.deliverorder("ORD123");

console.log("------------------");

const admin = new Admin ("Manager","admin@foodapp.com");

admin.login();
admin.removerestaurant("ABC Restaurant");
