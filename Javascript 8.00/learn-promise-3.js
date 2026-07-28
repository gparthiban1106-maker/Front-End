function orderFood()
{
    return new Promise((resolve)=>
    {
    setTimeout(() => {
        resolve("✅Order Placed");
    }, 5000);
    });
}

function prepareFood()
{
    return new Promise((resolve,reject)=>
    {
        console.log("🧑‍🍳Food is being prepared");
    setTimeout(() => {
        reject("food got damaged");
    }, 3000);
    });
}

function findDeliverypartner()
{
    return new Promise((resolve)=>
    {
        console.log("🛵Finding Delivery Partner");
    setTimeout(() => {
        resolve();
    }, 2000);
    });
}

function outForDelivery()
{
    return new Promise((resolve)=>
    {
        console.log("🚚Order is out for delivery");
    setTimeout(() => {
        resolve();
    }, 1000);
    });
}

function foodDelivered()
{
    return new Promise((resolve)=>
    {
        console.log("🏡Food Delivered Successfully");
        resolve();
    });
}

orderFood()
.then(()=>prepareFood())
.then(()=>findDeliverypartner())
.then(()=>outForDelivery())
.then(()=>foodDelivered())
.then(()=>
{
    console.log("✅Order Completed");  
})
.catch((error)=>
{
    console.log("❌Something went wrong",error);
});