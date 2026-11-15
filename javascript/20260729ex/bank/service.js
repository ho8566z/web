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

/** accountDB 에 거래 기록을 저장할 때 쓰는 키. 기록을 추가할 때마다 1씩 늘어난다. */
export let accountNo = 1;

// 계좌 개설
/** 고객 이름·전화번호를 입력받아 고객과 잔액 0 인 계좌를 만들어 DB 에 저장한다. 입력이 비면 중단한다. */
export const openingNewAccount = () => {
    console.log('openingNewAccount() CALLED!!');

    let customerNo = createCustomerNo();
    let accountNumber = createAccountNumber();
    let customerName = prompt('INPUT CUSTOMER NAME!! ');
    if (customerName === null || customerName.trim() === '') {
        return;
    }
    let customerPhone = prompt('INPUT CUSTOMER PHONE!! ');
    if (customerPhone === null || customerPhone.trim() === '') {
        return;
    }

    let customerObj = new Customer(customerNo, customerName, customerPhone, accountNumber);
    customerDB.set(customerNo, customerObj);

    let accountObj = new Account(accountNumber, 0, 0, getDateTimeFormat());
    accountDB.set(accountNo, accountObj);
    accountNo++;

    console.log('customerDB: ', customerDB);
    console.log('accountDB: ', accountDB);
}

// 입금
/** 고객번호·계좌번호·입금액을 입력받아 입금 기록을 accountDB 에 추가한다. */
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
/** 고객번호·계좌번호·출금액을 입력받아 출금 기록을 accountDB 에 추가한다. */
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
/** 고객번호·계좌번호를 확인한 뒤 해당 계좌의 입출금 기록을 콘솔에 출력한다. */
export const printDepositWithdrawHistory = () => {
    console.log('printDepositWithdrawHistory() CALLED!!');

    // 고객번호, 계좌번호
    let customerNo =  prompt('INPUT CUSTOMER NO ');
    let accountNumber =  prompt('INPUT CUSTOMER NUNBER ');

    const customer = customerDB.get(customerNo);
    if (!customer || customer.accountNumber !== accountNumber) {
        console.log('CUSTOMER OR ACCOUNT NOT FOUND!!');
        return;
    }

    for (const [key, value] of accountDB) {
        if (value.accountNumber === accountNumber) {
            console.log(`key: ${key} - value: ${value.accountNumber} ${value.depositMoney} ${value.withdrawMoney} ${value.dateTime}`);
        }
    }
}