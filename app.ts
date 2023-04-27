// lesson 1

// const button = document.querySelector('button')! as HTMLButtonElement;
// const input1 = document.getElementById('num1')! as HTMLInputElement;
// const input2 = document.getElementById('num2')! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener('click', function () {
//   console.log(add(+input1.value, +input2.value));
// });

// lesson 2

// Задайте правильные ts типы, для классических js;

// let age = 50;
// let name = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };

// let age: number;
// age = 50;
// let name1: string;
// name1 = 'Max';
// let toggle: boolean;
// toggle = true;
// let empty: null;
// empty = null;
// let notInitialize: undefined;
// notInitialize = undefined;
// let callback = (a: number) => {
//   return 100 + a;
// };
// callback = a => {
//   return 100 + a;
// };

// Задавайте тип для переменной в которую можно сохранить любое значение.

// let anything: any;

// anything = -20;
// anything = 'Text';
// anything = {};

// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.

// let some: unknown;
// some = 'Text';

// let str: string;

// if (typeof some === 'string') {
//   str = some;
// }

// Сделайте неизменяемый массив со строго описанными типами. Массив для примера.

// let person: [string, number];

// person = ['Max', 21];

// Опишите enum условие следующее, он должен отображать статус загрузки.Загружается(LOADING) и загружена(READY).

// enum Status { LOADING, READY }

// const page = {
//   load: Status.READY
// }

// if (page.load === Status.LOADING) {
//   console.log('Страница загружается');
// }
// if (page.load === Status.READY) {
//   console.log('Страница загружена');
// }

// Сделайте переменную, которая может принимать или строку или число.

// let query: string | number
// query = 5
// query = "df"

// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'

// let literal: 'enable' | 'disable'

// literal = 'disable'

// Укажите типы для следующих функций

// function showMessage(message: string): void {
//     console.log(message);
// }

// function calc(num1:number, num2:number):number {
//   return num1 + num2;
// }

// function customError(): never  {
//   throw new Error('Error');
// }

// Создайте свой тип данных на основе имеющихся данных.

// type CustomType = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: 'open' | 'close';
//   details?: {
//     createAt: string;
//     updateAt: string;
//   };
// };

// const page1: CustomType = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: '2021-01-01',
//     updateAt: '2021-05-01',
//   },
// };

// const page2: CustomType = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// };
