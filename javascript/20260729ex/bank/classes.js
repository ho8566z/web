export class Customer {
    constructor(customerNo, customerName, customerPhone, accountNumber) {
        this.customerNo = customerNo;
        this.customerName = customerName;
        this.customerPhone = customerPhone;
        this.accountNumber =accountNumber;
    }
}

export class Account {
    constructor(accountNumber, depositMoney, withdrawMoney, dateTime) {
        this.accountNumber = accountNumber;
        this.depositMoney = depositMoney;
        this.withdrawMoney = withdrawMoney;
        this.dateTime = dateTime;
    }
}