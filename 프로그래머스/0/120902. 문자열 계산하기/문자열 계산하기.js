function solution(my_string) {
    const arr = my_string.split(" ");
    let answer = Number(arr[0]);
    let cal = "";
    for (let i=1; i<arr.length; i++) {
        if (arr[i] === "+") {
            cal = "+";
        } else if (arr[i] === "-") {
            cal = "-";
        } else {
            if (cal === "+") {
                answer += Number(arr[i]);
            } else {
                answer -= Number(arr[i]);
            }
        }
        console.log(answer)
    }
    return answer
}