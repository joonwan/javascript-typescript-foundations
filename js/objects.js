/**
 * 객체
 * 이름이 있는 여러 값을 하나로 묶음
 */

// 객체 생성

const job = {
    id: 1,
    name: "재고 반영",
    priority: 2,
    completed: false,
};

console.log(job);

// 속성 조회
// 일반적으로 . 표기법 사용
console.log(job.id); 
console.log(job.name); 

// 속성 이름이 변수에 들어 있으면 대괄호 표기법을 사용함.
console.log(job["priority"]); 
console.log(job["completed"]);

// 속성 변경
job.completed = true;

// 속성 추가
job.requestedAt = "2026-09-29";

console.log(job);

// 존재하지 않는 속성 조회시 undefined
console.log(job.worker);

// 속성 삭제
delete job.completed;
console.log(job);

// 중첩 객체
const newJob = {
    id: 1,
    name: "재고 반영",
    priority: 2,
    requester: {
        id: 100,
        name: "Tom",
    },
    tags: ["inventory", "urgent"],
};

console.log(newJob.requester.name);
console.log(newJob.tags[0]);
console.log(newJob);

// 배열과 객체는 참조 타입임 -> original 과 copied 는 같은 객체를 바라봄
const original = {
    id: 1,
    completed: false,
};

const copied = original;
copied.completed = true;
console.log(original.completed);
