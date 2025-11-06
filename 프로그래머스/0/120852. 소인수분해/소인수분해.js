function solution(n) {
    const answer = [];
    let current = n;
    let num = 2;
    while (current !== 1) {
        if (current % num === 0) {
            current /= num;
            if (answer.length === 0) {
                answer.push(num);
            } else {
                for (let i=0; i<answer.length; i++) {
                    console.log(answer[i])
                    if (answer[i] === num) {
                        continue;
                    }
                    if (i === answer.length-1) {
                        answer.push(num);
                    }
                }
            }
            
        } else {
            num += 1;
        }
    }
    return answer;
}