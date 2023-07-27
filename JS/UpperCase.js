// var name = 'Angela';
// var name1 = name.toUpperCase();
// console.log(name1)
// var name2 = name1.toLowerCase()
// console.log(name2)
name = prompt('What is your name?');
nameContinue = name.slice(1,name.length);
nameContinue1 = nameContinue.toLowerCase();
alert('Hello'+' '+ name.slice(0,1).toUpperCase() + nameContinue1);