function solution(citations) {
    let cnt = 0;
    const arr = citations.sort((a,b) => {
        return a-b;
    })
    for (let i=0; i<citations.length; i++) {
        if(arr[i] >= arr.length-i) {
            return arr.length-i;
        }
    }
    return cnt;
}