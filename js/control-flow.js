/**
 * 조건문
 */

let priority = 2;

if (priority === 1) {
    console.log("긴급");
} else if (priority === 2) {
    console.log("높음");
} else {
    console.log("일반");
}

/**
 * 논리 연산자 
 * && : and
 * || : or
 * ! : 반대
 */

priority = 1;
let completed = false;

if (priority === 1 && !completed) {
    console.log("긴급하게 처리해야 합니다.");
} else if (priority === 1 || priority == 2) {
    console.log("우선 처리 대상입니다.");
}

if (!completed) {
    console.log("미완료 작업입니다.");
}

/**
 * Falsy
 * false 처럼 취급하는 것들
 * - false
 * - 0
 * - ""
 * - null
 * - undefined
 * - NaN
 */

