export function createRandomNumber(min, max) {
    console.log('createRandomNumber() CALLED!!');

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

export function createAccountNumber() {
    console.log('createAccountNumber() CALLED!!');

    let date = new Date();
    let dateFormat = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}-${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
    // dateFormat : 20260729-155930

    let newAccountNumber = dateFormat;
    newAccountNumber += '-' + createRandomNumber(100, 999);
    newAccountNumber += '-' + createRandomNumber(1000, 9999);
    // newAccountNumber : 20260729-155930-527-1587
    console.log('newAccountNumber: ', newAccountNumber);

    return newAccountNumber;

}

export function createCustomerNo() {
    console.log('createCustomerNo() CALLED!!');

    let date = new Date();
    return `${date.getFullYear()}-${createRandomNumber(1000000, 9999999)}-${createRandomNumber(10, 99)}`;

}

export function getDateTimeFormat() {
    let date = new Date();
    const pad = (value) => String(value).padStart(2, '0');
    let dateTimeFormat = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    dateTimeFormat += ` ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
    // 2026-07-30 09:31:45

    return dateTimeFormat;
}