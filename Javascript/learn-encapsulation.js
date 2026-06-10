// Process of hidding the data privatly.
class BankAccount
{
    #balance=0;
    deposit(amount)
    {
        this.#balance+=amount;
    }
    getBalance()
    {
        return this.#balance;
    }
    withdraw(amount)
    {
        if (amount<=this.#balance)
        {
            this.#balance-=amount;
        }
    }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());
console.log(account.#balance);

