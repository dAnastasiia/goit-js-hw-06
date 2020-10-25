import users from "./users";
// find
// Получи объект пользователя (не массив) по уникальному значению свойства email.

// Используй деструктурирующее присваивание для параметра функции ({email}) без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

const getUserWithEmail = (array, mail) =>
  array.find(({ email }) => email === mail);

console.log(getUserWithEmail(users, "rossvazquez@xinware.com"));
