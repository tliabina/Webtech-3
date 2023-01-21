/*Cоздать функцию greeting, которая принимает имя и выводит приветствие, 
используя переданное имя, в консоль*/

function greeting(name) {
    return console.log(`Привет, ${name}!`);
}
const userName = prompt("Введите ваше имя");
greeting(userName);
