import users from "./users";
// reduce, filter, sort
// Получи массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// Слияние массивов:

// const odd = [1, 3, 5];
// const even = [2, 4, 6];

// // 1
// [...odd, ...even];
// //  [1, 3, 5, 2, 4, 6]

// // 2
// odd.concat(even)
// //  [1, 3, 5, 2, 4, 6]
// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

const getSortedUniqueSkills = (array) =>
  array
    .reduce((allSkills, { skills }) => allSkills.concat(skills), [])
    .sort()
    .filter((item, i, allSkills) => allSkills[i + 1] !== item);

console.log(getSortedUniqueSkills(users));
