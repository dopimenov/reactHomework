/*
  В функциональном программировании используется декларативный подход к написанию функций.

  Императивный подход (impera лат."правило") - парадигма программирования, при которой мы пошагово описываем, что делать, как добиться желаемого результата (инструкция).

  Декларативный подход (declare лат."объявлять") - парадигма программирования, при которой мы говорим, что хотим получить, какой результат нам нужен.

  Например, нам нужно выбрать из массива элементы с соответствующим параметром и создать из них новый массив.
  Если мы реализуем это при помощи цикла for - это будет императивный стиль,
  а если мы используем встроенную функцию высшего порядка filter - это будет декларативный подход.

*/

const users = [
  {type: 'admin', name: 'Ivan Ivanov'},
  {type: 'admin', name: 'Aleksandra Aleksandrova'},
  {type: 'user', name: 'Vasily Vasilenko'},
  {type: 'moderator', name: 'Mark Markov'},
  {type: 'user', name: 'Simeon Simeonov'},
  {type: 'user', name: 'Petr Petrov'}
];

/*
// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку,
// задаваемую в передаваемой callback-функции.
// arr.filter(callback[, thisArg])
// callback - функция проверки каждого элемента; вызывается с аргументами (element, index, array).
// Возвращает true для сохранения элемента и false для его пропуска.
// thisArg - Необязательный параметр; значение, используемое в качестве this при выполнении функции callback.

let admins = users.filter(function (user) {
  return user.type === 'admin';
});
*/

// Но ES6 даёт нам возможность записать этот код ещё короче.
// Используем arrow function (стрелочные функции).
// опускаем ключевое слово function; если аргумент один, то можно опустить круглые скобки;
// ставим символы => перед телом функции;
// если тело функции только возвращает какое-то значение, то фигурные скобки тоже можно опустить.

/*
let admins = users.filter(user => user.type === 'admin');
*/

// Arrow function можно присваивать переменным, как и обычные функции, поэтому мы можем улучшить наш код:
const isAdmin = user => user.type === 'admin';

let admins = users.filter(isAdmin);

console.log(admins);

// Важная особенность и достоинство arrow function заключается в том,
// что они не имеют собственного контекста, а значит, сохраняют контекст родителя.