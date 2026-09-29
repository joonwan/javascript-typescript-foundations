// data
const jobs = [
  { id: 1, name: "재고 반영", priority: 3, completed: false },
  { id: 2, name: "회계 전표 생성", priority: 1, completed: false },
  { id: 3, name: "보고서 생성", priority: 2, completed: true },
];

// foreach: 각 원소 실행
jobs.forEach((job) => console.log(job.name));

// map: 원소 변환
const jobNames = jobs.map((job) => job.name);
console.log(jobNames);

// filter: 조건에 맞는 원소만 선택 -> 항상 배열 반환
const incompleteJobs = jobs.filter((job) => !job.completed);
console.log(incompleteJobs);

// find: 첫 원소 하나 찾기
const job = jobs.find((job) => job.id === 2);
console.log(job);

// 없으면 undefined;
const undefinedJob = jobs.find((job) => job.id === 100);
console.log(undefinedJob);

// some: 하나라도 만족하는지 확인, 결과는 boolean
const hasUrgentJob = jobs.some((job) => job.priority === 1);
console.log(hasUrgentJob);

// reduce: 값을 하나로 누적
// 두번째 매개변수는 초기값
const incompleteCount = jobs.reduce((count, job) => {
  if (!job.completed) return count + 1;
  return count;
}, 0);

console.log(incompleteCount);

// sort() : 원본 배열을 정렬함.
// 숫자를 그냥 정렬하려면 주의해야함.
// 기본 sort() 는 숫자를 문자열 처럼 비교함. 숫자 정렬에는 비교 함수를 전달 해야함.
const nums = [111, 21];
nums.sort();
console.log(nums); // [ 111, 21 ]

nums.sort((a, b) => a - b);
console.log(nums); // [ 21, 111 ]