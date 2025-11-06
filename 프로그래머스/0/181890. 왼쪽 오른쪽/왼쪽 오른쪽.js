function solution(str_list) {
    const answer = [];
    const right = [];
    let where = ""
    for(let i=0; i<str_list.length; i++) {
        if (where) {
            right.push(str_list[i]);
        } else {
            if (str_list[i] === "l") {
                return answer;
            } else if (str_list[i] === "r") {
                where = "r";
            } else {
                answer.push(str_list[i]);
            }
        }
    }
    if (!where) {
        return [];
    }
    return where === "r" ? right : answer;
}