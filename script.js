//bai 1
function grade(mark) {
    if (mark >= 85) {
        console.log("A");
    } else if (mark >= 70 && mark < 85) {
        console.log("B");
    } else if (mark >= 40 && mark < 70) {
        console.log("C");
    } else {
        console.log("D");
    }
}
//bai 2
function largerNumber(a, b) {
    if (a > b) {
        console.log(a);
    } else if (b > a) {
        console.log(b);
    } else {
        console.log("Hai số bằng nhau");
    }
}
//bai 3
function checkNumber(num) {
    if (num > 0) {
        console.log("Số dương");
    } else if (num < 0) {
        console.log("Số âm");
    } else {
        console.log("Số 0");
    }
}
//bai 4
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log("Số chẵn");
    } else {
        console.log("Số lẻ");
    }
}
//bai 5
function checkDivisibilityByThreeAndFive(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("Chia hết cho cả 3 và 5");
    } else {
        console.log("Không chia hết cho  3 và 5");
    }
}
// bai 6
function isEqual(a, b, c) {
    if (c === a + b) {
        console.log("c bằng tổng của a và b");
    } else {
        console.log("c không bằng tổng của a và b");
    }
}

