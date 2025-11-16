function solution(numbers, k) {
    let current = 0;
    let count = 0;
    while (count !== k-1) {
        //마지막 전 인덱스와 마지막 인덱스인 경우에는 다시 처음으로 돌아가야 함.
        if (current+1 === numbers.length-1) {
            current = 0;
        } else if (current === numbers.length-1) {
            current = 1;
        } else {
            current += 2;            
        }
        count += 1;
        console.log(current);
    }
    return numbers[current];
    
}