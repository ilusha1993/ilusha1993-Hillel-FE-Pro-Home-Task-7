// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const array = [1, '2', 5, 3, '5', 4, 5, 6, '7'];

function removeElement(array, item) {
    for (i = 0; i < array.length; i++) {
        if (array[i] === 5) {
            array.splice(i, 1)
            i--;
        }
    }

    return array;
}

removeElement(array, 5);
console.log(array);

