function withdrawMoney(value)
{
    return new Promise((resolve,reject)=>
    {
        const balance=5000;
        const amount=value;

        if (balance>=amount)
        {
            resolve("Cash Withdraw Successfully");
        }
        else
        {
            reject("Insufficient Balance");
        }
    });
}

withdrawMoney(10000)
.then((message)=>
{
    console.log(message);
})
.catch((err)=>
{
    console.log(err);
});