// 컨테이너 자료형
/*
여러 개의 데이터를 하나의 변수에 담아 관리할 수 있는 자료형
즉, 하나의 값이 아닌 값들의 집합(묶음)을 표현할 수 있다

JavaScript의 대표적인 컨테이너 자료형은 다음과 같다
- 배열(Array): 순서가 있는 데이터의 집합(by index)
- 객체(Object): 이름(key)과 값(value)으로 구성된 데이터의 집합
*/

// 배열
/*
-대괄호 []로 묶어 표현하며, 순서(index)를 기반으로 각 요소에 접근한다
- 인덱스는 0부터 시작한다
*/

let fruits = ['사과', '바나나', '포도'];
console.log('fruits: ', fruits);
console.log('fruits[0]: ', fruits[0]);
console.log('fruits[1]: ', fruits[1]);
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

for (fruit of fruits) {
    console.log('fruit: -> ', fruit);
}


// 마지막 값 구하기
let lastData = fruits[fruits.length-1]
console.log(lastData);      // 포도
// fruits의 마지막 데이터인 '포도'가 출력됨

console.log(fruits[10]);    // undefined


// 객체(object) -> python의 dictionary
let man = {
    'name': '홍길동',
    'age': 20,
    'mail': 'gildong@gmail.com',
    'hobby': ['축구', '농구', '야구'], 
    'fun': function() {
        console.log('DOGGG')
    }
}

console.log('man: ', man);
// man:  {name: '홍길동', age: 20, 
// mail: 'gildong@gmail.com', hobby: Array(3)}
console.log('man name: ', man['name']);
// man name:  홍길동
console.log('man hobby: ', man['hobby']);
// man hobby:  (3) ['축구', '농구', '야구']

console.log('man hobby 마지막 데이터: ', man['hobby'][man['hobby'].length -1]);
// man hobby 마지막 데이터:  야구

man['fun']();   // DOGGG


// // 함수('function')
// /*
// 특정 작업(로직)을 수행하는 코드 블록에 이름을 붙여 재사용할 수 있도록 만든 것
// -> 즉, 여러 줄의 코드를 하나의 “기능 단위”로 묶어두는 것


// 1. function 함수이름(매개변수, ...) {
//     함수 실행 구문
// }
// */
// function intro00() {  // 함수 선언부
//     alert('Hello');
// }

// intro00();        // 함수 호출부

// //============================================================//

// // 2. 함수 표현식
// /*
// const 함수이름 = function(매개변수, ...) {
//     함수 실행부
// }
// */
// const intro10 = function() {    // 함수 선언부
//     alert('Hello / Hello');
// }

// intro10();      // 함수 호출부

// //============================================================//

// // 3. 화살표 함수(Arrow function) at, ES6
// /*
// const 함수이름 = (매개변수, ...) => {
//     함수 실행부
//     }
// */
// const intro20 = () => {
//     alert('Hello / Hello / Hello');
// }

// // const intro20 = () => alert('Hello / Hello / Hello');
// // {} 중괄호 제거 버전

// intro20();


const add = (n1, n2) => {
    return n1 + n2;
}

// return 단축 버전
const add = (n1, n2) => n1 + n2;

let result = add(10, 20);
console.log('result: ', result);    // result:  30


//============================================================//

// DOM(Document Object Model)
// HTML 문서를 자바스크립트가 접근하고 조작할 수 있도록 표현한 객체 모델

/*
즉, 브라우저는 HTML 문서를 해석해서 트리 구조(Tree Structure)의 객체로 변환해,
이를 통해 자바스크립트가 웹페이지의 요소(엘리먼트)를 읽거나 수정할 수 있다.

- 핵심 개념
    Document: 웹 문서 전체를 의미 (HTML 파일)
    Element(요소): <div>, <p>, <button> 같은 HTML 태그
    Node(노드): 모든 HTML 요소, 속성, 텍스트 등을 포함하는 트리 구조의 구성 단위
    조작 가능: JS로 HTML의 내용, 속성, 스타일 등을 추가·변경·삭제 가능

-> DOM은 브라우저가 HTML 문서를 객체 형태로 표현한 모델이며,
    자바스크립트로 웹페이지를 동적으로 조작하기 위한 기반 구조
*/
 
/*
- 기본 문법
자바스크립트에서는 DOM에 접근하기 위해 document 객체를 사용한다.
HTML 문서 전체를 나타내는 루트 객체

????????????????????????????????????????????????????

*/