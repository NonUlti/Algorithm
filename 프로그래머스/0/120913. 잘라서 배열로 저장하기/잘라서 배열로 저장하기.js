function solution(my_str, n) {
    const answer = [];
    let str = '';
    for (let i=0; i<my_str.length; i++) {
        if (i === 0) {
            str += my_str[0];
            continue;
        }
        if (i%n === 0) {
            answer.push(str);
            str = my_str[i];
        } else {
            str += my_str[i];
        }
    }
    if (str !== "") {
        answer.push(str)
    }
    return answer;
}