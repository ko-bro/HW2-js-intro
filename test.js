console.log('------------- # 4');
let a = 5;
let b = 5;

let addition = a + b;
console.log(addition);

let subtraction = a - b;
console.log(subtraction); 

let multiplication = a * b;
console.log(multiplication);

let division = a / b;
console.log(division);

console.log('------------- # 5');

for (let n = 1; n <= 5; n++) {
    console.log(n);
}

console.log('------------- # 6');

for (let b = 5; b >= 1; b--) {
    console.log(b);
}

console.log('------------- # 7');

function getMarkInfo(condition) {
    if (condition === 10) {
        console.log('У вас максимальный балл');
    } else if (condition != 10) {
        console.log('У вас средний балл');
    }
}
getMarkInfo(10)
getMarkInfo(1)

console.log('------------- # 8');

function getDayInfo(position) {
    switch(position) {
        case 0: 
            console.log('Sunday');
            break;
        case 1: 
            console.log('Monday');
            break;
        case 2: 
            console.log('Tuesday');
            break;
        case 3: 
            console.log('Wednesday');
            break;
        case 4: 
            console.log('Thursday');
            break;
        case 5: 
            console.log('Friday');
            break;
        case 6: 
            console.log('Saturday');
            break;
        default:
            console.log('Wrong data');
    }
}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)
getDayInfo(7)
getDayInfo(9)
getDayInfo(15)

console.log('------------- # 9');

let test = ['a', 'b', 'c'];
test.push(1, 2, 3);
console.log(test);

console.log('------------- # 10');

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3);

console.log('------------- # 11 упрощенный');

let sum = 0;
for (i = 1; i <= 4; i++) {
    sum += i;
}
console.log(sum);

console.log('------------- # 11 усложненный');

let n = prompt('Введите любое целое положительное число')
function testNumber(n) {
    let total = 0;
    for (i = 1;  i <= n;  i++) {
      total += i;
   }
    return total;
}
alert(testNumber(n));