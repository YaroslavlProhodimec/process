// 📁 cache.js
let cache = new Map();

// вычисляем и запоминаем результат
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* тут какие-то вычисления результата для объекта */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// Теперь используем process() в другом файле:

// 📁 main.js
let obj = {
  /* допустим, у нас есть какой-то объект */
};

let result1 = process(obj); // вычислен результат

// ...позже, из другого места в коде...
let result2 = process(obj); // ранее вычисленный результат взят из кеша

// ...позже, когда объект больше не нужен:
obj = null;

alert(cache.size); // 1 (Упс! Объект всё ещё в кеше, занимает память!)
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // преобразовать в массив, затем map, затем fromEntries обратно объект
  Object.entries(prices).map((el) => [el[0], el[1] * 2]),
);

console.log(doublePrices.meat); // 8
//
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const sumSalaries = (input) => {
  let sum = 0;
  for (ele of Object.values(input)) {
    sum += ele;
  }
  return sum;
};

console.log(sumSalaries(salaries)); // 650
//
второй элемент не нужен
let [firstName, title, ...perkoset] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

console.log(title); // Caesar
console.log(firstName); // Julius
console.log(perkoset); // "Consul","of the Roman Republic",
let user = {
  name: "John",
  age: 30,
};
console.log(Object.entries(user));
цикл по ключам и значениям
for (let [key, value] of Object.entries({ name: "John" })) {
  console.log(`${key}:${value}`); // name:John, затем age:30
}
let [key, value] = [{ name: "John" }];
console.log(key);
console.log(value);
let user = new Map();
user.set("name", "John");
user.set("age", "30");
console.log(user);
//
let a = 1;
let b = 3;
let c = a;

a = b;
b = c;
console.log(a, b);
[b, a] = [a, b];
console.log(a, b);
let options = {
  title: "Menu",
};

let { width = 100, height = 200, title } = options;

console.log(options); // Menu
console.log(width);  // 100
console.log(height); // 200
let options = {
  title: "Menu"
};

let {width: w = 100, height: h = 200, title} = options;
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// деструктуризация разбита на несколько строк для ясности
let {
  size: { // положим size сюда
    width,
    height
  },
  items: [item1, item2], // добавим элементы к items
  title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// деструктуризация разбита на несколько строк для ясности
let {
  size: { // положим size сюда
    width,
    height
  },
  items: [item1, item2], // добавим элементы к items
  title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
} = options;