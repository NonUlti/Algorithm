function solution(operations) {
    const answer = [];
    for (let i=0; i<operations.length; i++) {
        const arr = operations[i].split(" ");
        if (arr[0] === "I") {
            heapPush(answer, Number(arr[1]));
        } else {
            if (answer.length === 0) {
                continue;
            }
            if (arr[1] === "1") {
                const max = Math.max(...answer);
                const idx = answer.indexOf(max);
                answer.splice(idx, 1);
                heapify(answer); // 다시 힙 정렬
            } else {
                heapPop(answer)
            }
        }
        // console.log(arr)
        // console.log(answer)
        // console.log("----")
    }
    if (answer.length === 0) {
        return [0,0];
    } else if (answer.length === 1) {
        return [answer[0], answer[0]];
    } else {
        return [Math.max(...answer), Math.min(...answer)];
    }
}

// 최소 힙 초기화: 배열을 한 번에 힙 구조로 만듦 (O(n))
function heapify(arr) {
  for (let i = (arr.length >> 1) - 1; i >= 0; i--) {
    siftDown(arr, i);
  }
  return arr;
}

// 삽입 (O(log n))
function heapPush(heap, value) {
  heap.push(value);
  siftUp(heap, heap.length - 1);
}

// 삭제 (O(log n)) — 최솟값 꺼내기
function heapPop(heap) {
  if (heap.length === 0) return undefined;
  const top = heap[0];
  const last = heap.pop();
  if (heap.length > 0) {
    heap[0] = last;
    siftDown(heap, 0);
  }
  return top;
}

// 위로 올리며 정렬
function siftUp(heap, idx) {
  while (idx > 0) {
    const parent = (idx - 1) >> 1;
    if (heap[parent] <= heap[idx]) break;
    [heap[parent], heap[idx]] = [heap[idx], heap[parent]];
    idx = parent;
  }
}

// 아래로 내리며 정렬
function siftDown(heap, idx) {
  const n = heap.length;
  while (true) {
    const left = (idx << 1) + 1;
    const right = left + 1;
    let smallest = idx;

    if (left < n && heap[left] < heap[smallest]) smallest = left;
    if (right < n && heap[right] < heap[smallest]) smallest = right;

    if (smallest === idx) break;
    [heap[idx], heap[smallest]] = [heap[smallest], heap[idx]];
    idx = smallest;
  }
}

// 힙의 최솟값 확인
function heapPeek(heap) {
  return heap[0];
}