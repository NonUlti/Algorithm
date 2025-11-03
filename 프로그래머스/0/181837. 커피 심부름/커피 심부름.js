function solution(order) {
    let answer = 0;
    for (const menu of order) {
        let realMenu = '';
        if (menu === "anything" || menu === "americano") {
            answer += 4500;
        } else if (menu === "cafelatte") {
            answer += 5000;
        } else if (menu[0] === "i" || menu[0] === "h") {
            answer += checkMenu(menu.slice(3));
        } else if (menu[menu.length-2] === "c" || menu[menu.length-2] === "o") {
            answer += checkMenu(menu.slice(0, menu.length-3));
        }
    }
    return answer;
}

const checkMenu = (str) => {
    if (str === "americano") {
        return 4500;
    } else {
        return 5000;
    }
}