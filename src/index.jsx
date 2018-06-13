import User from './js/user';
import NewComponent from './js/newComponent';

//задание 2,3
const user = new User('#User', 'Иванов', 'Иван', 'Иванович');

user.aboutDeveloper();
console.log("hello world");

//задание 4,5
const newComponent = new NewComponent("#NewComponent");