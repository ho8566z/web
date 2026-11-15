/** 은행 고객 정보(고객번호, 이름, 전화번호, 계좌번호)를 담는 클래스. */
export class Customer {
    constructor(customerNo, customerName, customerPhone, accountNumber) {
        this.customerNo = customerNo;
        this.customerName = customerName;
        this.customerPhone = customerPhone;
        this.accountNumber =accountNumber;
    }
}

/** 계좌의 입금액·출금액과 거래 일시를 담는 클래스. */
export class Account {
    constructor(accountNumber, depositMoney, withdrawMoney, dateTime) {
        this.accountNumber = accountNumber;
        this.depositMoney = depositMoney;
        this.withdrawMoney = withdrawMoney;
        this.dateTime = dateTime;
    }
}