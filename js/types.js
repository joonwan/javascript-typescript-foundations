/**
 * string
 * 문자열 출력시 백틱을 사용하면 편리함
 * ${} 내부에 계산식도 넣을 수 있음
 */
const name = "Tom";
const age = 27;

console.log(`이름은 ${name} 이고 나이는 ${age} 입니다.`);

const num1 = 4;
const num2 = 5;
console.log(`4 x 5 = ${num1 * num2}`);

/**
 * number
 * 정수와 실수를 모두 number type 으로 다룸.
 */

console.log(typeof 100); // number
console.log(typeof 12.5); // number

/**
 * null
 * null type 은 object
 * null 인지 확인하기 위해서 typeof 를 사용하지 않음
 */

console.log(typeof null); // object

const value = null;
console.log("is null = ", value === null); // true

/**
 * null 과 undefined
 * - undefined : 아직 값이 할당되지 않음
 * - null	   : 개발자가 의도적으로 값이 없다고 표현
 */

let selectedJob;
const deletedJob = null;
console.log("selected job = ", selectedJob); // undefined
console.log("deletedJob = ", deletedJob);
console.log("selecetedJob == deletedJob ? ", selectedJob == deletedJob); //true: 느슨한 비교: null == undefined 는 true 로 판단됨
console.log("selecetedJob === deletedJob ? ", selectedJob === deletedJob); //false: 엄격한 비교: null === undefined 는 false 로 판단됨

/**
 * 값 비교
 * JavaScript 에서는 == 대신 === 를 사용하자.
 * == : 타입을 자동으로 변환한 다음 비교
 * === : 타입과 값을 모두 비교 
 * 실무에서는 ===, !== 를 사용
 */

console.log(`3 == "3" : ${"3" == 3}`);
console.log(`3 === "3" : ${"3" === 3}`);
console.log(`4 !== "4" : ${4 !== "4"}`);