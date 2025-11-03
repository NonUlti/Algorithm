function solution(s) {
    var answer = 0;
    let num = '';
    for (let i=0; i<s.length; i++) {
        if (s[i] === " ") {
            if (s[i+1] !== "Z") {
                answer += Number(num);
            }
            num = '';
        } else if (s[i] === "Z") {
            continue;
        } else {
            num += s[i];
        }
        
    }
    answer += Number(num);
    return answer;
}