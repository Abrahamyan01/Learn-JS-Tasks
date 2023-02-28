/*
Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

Например:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
Такая функция очень удобна при работе с данными, которые приходят с сервера.

В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.

Используйте метод .reduce в решении.
*/
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
}
