const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56];
const names = ['Petr', 'Jana', 'Pavel', 'Zuzana', 'Eva', 'Adam', 'Onyx'];
const persons = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 13, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
];

const evenNumbers = numbers.filter((item) => item % 2 == 0);
console.log(evenNumbers);

const adults = persons.filter((item) => item.age >= 18);
console.log(adults);

const dividedByThree = numbers.map((item) => item / 3);
console.log(dividedByThree);

const emails = persons.map((item)=> [
    { name: 'Petr', age: 16, gender: 'male', email: 'petr@gmail.com'},
    { name: 'Jana', age: 8, gender: 'female', email: 'jana@gmail.com'},
    { name: 'Pavel', age: 34, gender: 'male', email: 'pavel@gmail.com'},
    { name: 'Zuzana', age: 41, gender: 'female', email: 'zuzana@gmail.com'},
    { name: 'Eva', age: 13, gender: 'female', email: 'eva@gmail.com'},
    { name: 'Adam', age: 22, gender: 'male', email: 'adam@gmail.com'},
    { name: 'Adam', age: 22, gender: 'male', email: 'adam2@gmail.com'},
    { name: 'Onyx', age: 37, gender: 'intersex', email: 'onyx@gmail.com'},
] );
console.log(emails);
