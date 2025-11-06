function solution(my_string, queries) {
    var answer = '';
    const arr = my_string.split("");
    for (let i=0; i<queries.length; i++) {
        let num = queries[i][0];
        const str = [...arr];
        for (let j=queries[i][1]; j>=queries[i][0]; j--) {
            arr[num] = str[j];
            num += 1;
        }
    }
    return arr.join("");
}