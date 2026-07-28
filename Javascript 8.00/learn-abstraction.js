//Methods of as private
class PaymentGateway
{
    Pay(amount)
    {
        this.#validatecard();
        this.#contactbank();
        this.#processtransaction();
        console.log(`Payment of ${amount} Successfully`);
    }

    #validatecard()
    {
        console.log("Validating Card...");
    }

    #contactbank()
    {
        console.log("Contacting Bank...");
    }
    #processtransaction()
    {
        console.log("Processing Transaction...");  
    }
}

const Payment=new PaymentGateway();
Payment.Pay(5000);