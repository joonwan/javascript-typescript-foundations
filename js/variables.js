const name = "Tom";
// name = "Test"; const 는 상수라서 값 재할당 불가능

let age = 27;
age = 28; // let 은 값 재할당 가능

const isDeveloper = true;
let company;
const projectCount = null;

console.log(name);
console.log(age);
console.log(isDeveloper);
console.log(company);
console.log(projectCount);

/**
 *  const (constant): 재할당 할 수 없는 변수 -> java final 과 유사
 *  let (let) : 재할당 가능한 변수
 */