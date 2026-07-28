const account1 = {
    owner: "Alice",
    balance: 1000,
    history: [],

    
     deposit(amount) {

        if(typeof amount !== "number") {
        return "Invalid input";
    }
    if(amount <= 0) {
        return "Wrong value, try again";
    }
    
   this.balance += amount;

   this.history.push ({
        type: "deposit",
        amount: amount,
        balance: this.balance
     });
        return "Deposit saved successfully";

    },

    withdraw(amount) {
        if(typeof amount !== "number") {
            return "Invalid input";
        }
        if(amount <= 0 ) {
            return "Wrong value, try again";
        }
        if(amount > this.balance) {
            return "Not enough funds";
        }

        this.balance -= amount;

        this.history.push ({
        type: "withdraw",
        amount: amount,
        balance: this.balance
     });
            return "Amount withdrawn successfully";

        },

    transfer(account, amount) {

        if(typeof amount !== "number") {
            return "Invalid input";
        }

        if(amount <= 0) {
            return "Wrong value, try again";
        }

        if(account === this) {
            return "Can't transfer money to yourself"
        }

        if(amount > this.balance) {
            return "Not enough funds";

        }

        this.balance -= amount;
        account.balance += amount;

        this.history.push ({
        type: "transfer",
        amount: amount,
        to: account.owner,
        balance: this.balance
     });
        account.history.push({
            type:"received",
            amount: amount,
            from: this.owner,
            balance: account.balance
        });
            return "Transfer successful";
       },

       

    showBalance() {

        return `${this.owner}'s balance is ${this.balance}`;
    },
    showHistory() {
        const size = this.history.length;
        let result = "";

        if(size === 0){
            return "No operations yet";
        } 

        for(let i = 0; i < size; i++){
            const operation = this.history[i];

        result += `${operation.type}: amount ${operation.amount}, balance ${operation.balance}\n`;
        }
        return result;

    },

}
const account2 = {
   owner: "John",
   balance: 300,
   history: [],

    deposit: account1.deposit,
    withdraw: account1.withdraw,
    transfer: account1.transfer,
    showBalance: account1.showBalance,
    showHistory: account1.showHistory

};



console.log(account1.showBalance());

console.log(account2.showBalance());

console.log(account1.deposit(500));

console.log(account2.deposit(300));

console.log(account1.withdraw(200));

console.log(account2.withdraw(100));

console.log(account1.transfer(account2, 400));

console.log(account1.showBalance());

console.log(account2.showBalance());

console.log(account1.showHistory());

console.log(account2.showHistory());

