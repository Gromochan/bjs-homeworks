// Задача 1
let x = 2,
    y = 22,
    z = 0,
    result;
result = x * y + 5 * z + x - 1;
console.log(result);
// Задача 2
let array = {
    algebra: 5,
    geography: 4,
    physics: 4,
};
let average = 0;
let n = 0;
for (let key in array) {
    average += array[key];
    n++;
}
average = average / n;
console.log(average);
// Задача 3

let name = "Иван";
console.log("Привет, мир! Меня зовут " + name + ".");
