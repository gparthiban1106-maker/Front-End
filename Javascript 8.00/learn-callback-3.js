function orderFood(callback)
{
    console.log("Order Placed");
    setTimeout(() => {
        callback();
    }, 5000);
}

function prepareFood(callback)
{
    console.log("🧑‍🍳Food is being Prepared");
    setTimeout(() => {
        callback();
    }, 3000);
}

function findDeliverypartner(callback)
{
    console.log("🛵Finding Delivery partner");
    setTimeout(() => {
        callback();
    }, 2000);
}

function outForDelivery(callback)
{
    console.log("Order is Out for Delivery");
    setTimeout(() => {
        callback();
    }, 1000);
}

function foodDelivered()
{
    console.log("Food Delivered Successfully");
}

orderFood(()=>{
    prepareFood(()=>{
        findDeliverypartner(()=>{
            outForDelivery(()=>{
                foodDelivered();
            });
         });
    });
});



