import users from "./users";
// reduce
// Получи общую сумму баланса (сумму значений свойства balance) всех пользователей.

// Используй деструктурирующее присваивание для параметра функции {balance} без пробелов и переносов на новую строку

// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

const calculateTotalBalance = (array) =>
  array.reduce((total, { balance }) => total + balance, 0);

console.log(calculateTotalBalance(users));
// 20916
