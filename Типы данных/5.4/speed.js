/*
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
*/

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { 
      partialSum += item; 
      maxSum = Math.max(maxSum, partialSum); 
      if (partialSum < 0) partialSum = 0; 
    }
  
    return maxSum;
}
  
alert( getMaxSubSum([-1, 2, 3, -9]) ); 
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); 
alert( getMaxSubSum([-2, -1, 1, 2]) ); 
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); 
alert( getMaxSubSum([1, 2, 3]) ); 
alert( getMaxSubSum([-1, -2, -3]) );