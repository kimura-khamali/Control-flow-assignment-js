/*Write a program that takes in an array of numbers and consoles the first four items multiplied by itself and the last two added by 10. Return the array with the new values*/
function calculate() {
    const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numbers1 = numbers.slice(0, 4).map((num) => num * num);
    const numbers2 = numbers.slice(-2).map((num) => num + 10);
    console.log([...numbers1, ...numbers.slice(4, -2), ...numbers2]);
}
calculate();

/*Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];*/
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let index = 0;
while (index < arrNum.length) {
    if (index === 4) 
    break;
    console.log(arrNum[index]);
    index++;
}


/*Write a function that takes in a an array of strings and use a continue statement when the item is at the second index: let fruits= ['apple','plum','banana','strawberries','kiwi']*/
let fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi'];
function skipIndex() {
    for (let i = 0; i < fruits.length; i++) {
        if (i === 2) 
        continue;
        console.log(fruits[i]);
    }
}
skipIndex(fruits);

/*Write a function that accepts an array of strings and console.logs each element using a for loop.*/
function colorArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
colorArray(['red', 'green', 'blue']);

/*Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.*/


function store() {
    const a = "Lime";
    let reversed = "";
    let i = a.length - 1;
    while (i >= 0) {
        reversed += a[i];
        i--;
    }
    return reversed;
}
console.log(store());




