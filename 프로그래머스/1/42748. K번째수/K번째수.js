function solution(array, commands) {
    const answer = [];
    
    for (const command of commands) {
        const arr = [];
        for (let i=command[0]-1; i<command[1]; i++) {
            arr.push(array[i]);
        }
        answer.push(quickSort(arr)[command[2]-1]);
    }
    return answer;
}

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[Math.floor(arr.length/2)];
    const left = [];
    const mid = [];
    const right = [];
    for (let i=0; i<arr.length; i++) {
        
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            mid.push(arr[i]);
        }
    }
    return [...quickSort(left), ...mid, ...quickSort(right)];
}