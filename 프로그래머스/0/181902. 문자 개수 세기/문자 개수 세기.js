function solution(my_string) {
    const answer = new Array(52).fill(0);
    for (const str of my_string) {
        if (str.charCodeAt() >= 65 && str.charCodeAt() <= 90) {
            answer[str.charCodeAt()-65] += 1;
        } else {
            answer[str.charCodeAt()-71] += 1;
        }
    }
    return answer;
}