function solution(arr) {
    let x = 0;
    let current = arr;
    while(true) {
        let isSame = true;
        const next = cal(current);
        for (let i = 0; i < current.length; i++) {  // current 기준으로 비교
            if (current[i] !== next[i]) { 
                isSame = false; 
                break; 
            }
        }
        if (isSame === true) {
            break;
        }
        current = next;
        x++
    }
    return x;
}

const cal = (array =[]) => {
    const result = [];
    for (let i=0; i<array.length; i++) {
        if (array[i] >= 50 && array[i]%2 === 0) {
            result.push(array[i]/2);
            continue;
        }
        if (array[i] < 50 && array[i]%2 === 1) {
            result.push(array[i]*2 + 1);
            continue;
        }
        result.push(array[i]);
        
    }
    return result;
}