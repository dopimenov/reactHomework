'use strict';
/*
  Карринг (curry) - это когда функция принимает свои аргументы не сразу, а порционно (в класиическом представлении - по одному),
  то есть каррируя функцию, мы разбиваем её работу на стадии.

 */

// ES5
function makeAdderES5(constant) { // функция makeAdderES5 принимает один аргумент и возвращает функцию adder,
  return function adder(value) { // которая принимает другой аргумент и возвращает сумму этих двух аргументов, доступных из замыкания
    return constant + value;
  }
}

// ES6
// функция makeAdderES6 принимает один аргумент и возвращает функцию,
// которая принимает другой аргумент и возвращает, в свою очередь, сумму этих двух аргументов, доступных из замыкания
const makeAdderES6 = a => b => a + b;

// теперь мы можем передавать аргументы по одному
console.log(
    makeAdderES6(1)(2)
);

// можно использовать любое количество шагов
const add = a => b => c => d => a + b + c + d;

console.log(
    add(1)(2)(3)(4)
); // 10

// можем использовать следующим образом
const add2 = a => b => a + b;

const add10AndNext = add2(10);

console.log( add10AndNext(20) ); // 30

// более практичный пример использования карринга:
const arr = [{foo: 'bar'}, {foo: 'baz'}];

// функция prop принимает аргумент key и возвращает функцию, принимающую аргумент obj и возвращающую значение из объекта по ключу
const prop = key => obj => obj[key];

const getFoo = prop('foo');

console.log( arr.map(getFoo) ); // [ 'bar', 'baz' ]

// Функция curry реализована во многих библиотеках. Изнутри она выглядит так:
const curry = (func, ...initialArgs) => { // принимает функцию и какое-то количество аргументов
  return arg => { // возвращает функцию, которая принимает аргумент
    const args = initialArgs.concat(arg); // и конкатенирует все эти аргументы

    if (args.length >= func.length) { // если этих аргументов больше или равно количеству аргументов, с которыми была вызвана переданная функция
      return func(...args); // то завершаем работу внутренней функции, передавая во внешнюю функцию сконкатенированные аргументы
    } else { // иначе снова вызываем curry, передавая функцию и накопленные аргументы
      return curry(func, ...args);
    }
  };
};

const sum = (a, b, c) => a + b + c;

const carriedSum = curry(sum);

console.log(
    carriedSum(2)(3)(1)
);
