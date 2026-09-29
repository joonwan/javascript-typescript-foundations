/**
 * JavaScript 에서는 매개변수와 반환 타입을 작성하지 않음 
 */

function add(a, b) {
    return a + b;
}

const result = add(10, 20);
console.log(result); // 30;

/**
 * 이런 문제를 TypeScript 가 타입 검사로 막아줌
 */
const stringResult = add("10", "20");
console.log(stringResult); //"1020"

/**
 * 값이 전달되지 않았을때 사용할 기본값을 지정 가능함.
 */

function createJob(name, priority = 3) {
    return `${name}: 우선순위 ${priority}`
}

console.log(createJob("재고처리", 1));
console.log(createJob("보고서 생성"));

/**
 * 함수 표현식
 * 함수도 값 처럼 변수에 저장 가능
 */

const subtract = function(a, b) {
    return a - b;
}

console.log(`subtract: ${subtract(10, 3)}`);

/**
 * 화살표 함수
 */

let multiply = (a, b) => {
    return a * b;
}

// 본문이 하나의 반환식이라면 축약 가능
multiply = (a, b) => a * b;

console.log(`multuply: ${multiply(3, 4)}`);

// 매개변수가 하나라면 괄호도 생략 가능
const double = number => number * 2;
console.log(`double: ${double(5)}`);
