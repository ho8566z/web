import { 
    createRandomNumber,
    createAccountNumber,
    createCustomerNo,
    getDateTimeFormat
 } from './util.js'

import { 
    Customer,
    Account
 } from './classes.js'

import { 
    customerDB,
    accountDB
 } from './db.js'

export let accountNo = 1;

// 계좌 개설
export const openingNewAccount = () => {
    console.log('openingNewAccount() CALLED!!');

    let customerNo = createCustomerNo();
    let accountNumber = createAccountNumber();
    let customerName = prompt('INPUT CUSTOMER NAME!! ');
    let customerPhone = prompt('INPUT CUSTOMER PHONE!! ');

    let customerObj = new Customer(customerNo, customerName, customerPhone, accountNumber);
    customerDB.set(customerNo, customerObj);

    let accountObj = new Account(accountNumber, 0, 0, getDateTimeFormat());
    accountDB.set(accountNo, accountObj);
    accountNo++;

    console.log('customerDB: ', customerDB);
    console.log('accountDB: ', accountDB);
}

// 입금
export const doDeposit = () => {
    console.log('doDeposit() CALLED!!');

    // 고객번호, 계좌번호, 입금 금액
    let customerNo =  prompt('INPUT CUSTOMER NO ');
    let accountNumber =  prompt('INPUT CUSTOMER NUNBER ');
    let depositMoney =  prompt('INPUT DEPOSIT MONEY ');

    let accountObj = new Account(accountNumber, depositMoney, 0, getDateTimeFormat());
    accountDB.set(accountNo, accountObj);
    accountNo++;

    console.log('accountDB: ', accountDB);
}

// 출금
export const doWithDraw = () => {
    console.log('doWithDraw() CALLED!!');

    // 고객번호, 계좌번호, 출금 금액
    let customerNo =  prompt('INPUT CUSTOMER NO ');
    let accountNumber =  prompt('INPUT CUSTOMER NUNBER ');
    let withDrawMoney =  prompt('INPUT WITHDRAW MONEY ');

    let accountObj = new Account(accountNumber, 0, withDrawMoney, getDateTimeFormat());
    accountDB.set(accountNo, accountObj);
    accountNo++;

    console.log('accountDB: ', accountDB);
}

// 입/출금 내역
export const printDepositWithdrawHistory = () => {
    console.log('printDepositWithdrawHistory() CALLED!!');

    // 고객번호, 계좌번호
    let customerNo =  prompt('INPUT CUSTOMER NO ');
    let accountNumber =  prompt('INPUT CUSTOMER NUNBER ');

    for ( const [key, value] of accountDB) {
        console.log('key: ${key} - vlaue: ${value.accountNumber} ${value.depositMoney} ${value.withdrawMoney} ${value.dateTime}')
    }
}