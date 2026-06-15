// 제어문 - 조건문(if문 switch ~ case문)
/*
if문
if (조건식) {
    실행문
}
*/
let age = 20
if (age >= 18) {
    console.log('is adult');
}


/*
if ~ else문 -> 양자택일
*/
let isLogin = false;
if (isLogin) {
    console.log('is log-in')
} else {
    console.log('is log-out')
}


/*
if ~ else if ~ else if ... -> 다중비교
*/
let score = 85;
if (score >= 90) {
    console.log('is A');

} else if (score >= 80) {
    console.log('is B');

} else if (score >= 70) {
    console.log('is C');

} else if (score >= 60) {
    console.log('is D');

} else {
    console.log('is F');
}   // is B

// let score = 85;
// if (score >= 90) {
//     console.log('is A');

// } else if (score >= 70) {
//     console.log('is C');

// } else if (score >= 80) {
//     console.log('is b');

// } else if (score >= 60) {
//     console.log('is D');
    
// } else {
//     console.log('is F');
// }    // is C로 결과 오류


/*
switch문 -> 하나를 선택해서 실행
*/
let day = 0
switch(day) {
    case 1:
        console.log('월요일')
        break;

    case 2:
        console.log('화요일')
        break;
    
    case 3:
        console.log('수요일')
        break;

    case 4:
        console.log('목요일')
        break;

    default:
        console.log("I don't know")
        break;
}
// python에서 elif와 같아 보이지만, 다름
// 위에서 부터 순차적이 아닌, 입력된 데이터에 해당하는 
// 값의 기능을 수행함

// break로 다른 기능의 실행을 막음
// default의 경우, 선택사항이기 때문에, 위치 상관없음
// But, default는 맨 뒤에 두는게 관례
// 또한, default가 마지막이기 때문에 break를 쓰지
// 않아도 상관 없음

//===============================================//

// 제어문 - 반복문(for문, while문)

// for문 -> 횟수에 의한 반복 실행
/*
1에서 부터 10까지의 정수의 합

for (초기식(: 1); 조건식(: 10); 증감식(: 1씩 증가)) {
    반복 실행문
}
*/
// let sum = 0;
// for (let n = 1; n < 11; n++) { // 1부터 10끼지 1씩 증가
//     console.log('n: ', n)
//     sum += n;
// }
// console.log('sum: ', sum)   // sum:  55

// let sum = 0;
// let n = 1   // 초기식을 전역변수로서 사용 가능함
// for (; n < 11; n++) { // 1부터 10끼지 1씩 증가
//     console.log('n: ', n)
//     sum += n;
// }
// console.log('sum: ', sum)   // sum:  55

// for (i = 10, j = 0; i > 0, j < 10; i--, j++) {
//     console.log('i: ', i) 
//     console.log('j: ', j) 
// }



// while문 -> 조건에 의한 반복 실행
/*
while문 (조건식) {
    실행문
}
*/

let k = 3;
while (k < 10) {
    console.log('k: ', k);
    if (k >= 7)
    break;
    k++;
}

// do ~ while문
let count = 5;
do {
    console.log('count: ', count);
    count--;
} while(count > 0);
// 조건식에 의한 반복을 하기 전에, 무조건 1번은 실행을 하는 반복문

//===============================================//

let pt = prompt('What your Name: ');
console.log('pt: ', pt)
// alert와 같은 창에, 데이터를 입력해야 함