/**
 * 배열 생성과 조회
 */

const numbers = [10, 20, 30];

console.log(numbers); // [ 10, 20, 30 ]
console.log(numbers[0]); // 10
console.log(numbers[1]); // 20
console.log(numbers[2]); // 30
console.log(`array's length is ${numbers.length}`); // 3

// 존재하지 않는 위치 조회시 undefined
console.log(numbers[-1]); //undefined
console.log(numbers[numbers.length]); // undefined 

// 배열에 값 추가
numbers.push(30); // 뒤에 추가
numbers.unshift(0); // 앞에 추가

console.log(numbers);

// 배열에 값 제거
const last = numbers.pop(); // 끝에서 제거 후 반환
const first = numbers.shift(); // 앞에서 제거 후 반환

console.log(last); 
console.log(first);
console.log(numbers);

// 배열 값 변경
numbers[1] = 200;
console.log(numbers);

// 배열인지 확인하기
console.log(typeof numbers);            // object: js 에서는 배열도 객체임.
console.log(Array.isArray(numbers));    // true

// 배열 순회
console.log("배열 순회");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 값반 필요할 경우 for of 문
for (const number of numbers) {
    console.log(number);
}