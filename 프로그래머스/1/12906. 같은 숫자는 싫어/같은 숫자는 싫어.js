function solution(arr) {
    const answer = [];
    for (const num of arr) {
        if (answer.length === 0) {
            answer.push(num);
            continue;
        }
        if (answer[answer.length-1] !== num) {
            answer.push(num);
        }
    }
    return answer;
}