function solution(priorities, location) {
    // const complete = new Array(priorities.length).fill(0);
    const complete = [];
    const arr = [];
    for (let i=0; i<priorities.length; i++) {
        arr.push([priorities[i], i]);
    }
    // console.log(arr)
    while (complete.length !== priorities.length) {
        if (hasOver(arr[0][0], arr)) {
            arr.push(arr.shift());
        } else {
            complete.push(arr.shift());
        }
    }
    for (let k=0; k<complete.length; k++) {
        if (complete[k][1] === location) {
            return k+1;
        }
    }
}

// 남은 프로레스 중 우선순위가 더 높은 프로세스가 있는지 확인
const hasOver = (num, arr) => {
    let max = 0;
    for (const j of arr) {
        if (j[0] > max) {
            max = j[0];
        }
    }
    return num < max ? true : false;
}