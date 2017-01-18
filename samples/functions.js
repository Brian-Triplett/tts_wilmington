// function add(x, y){
// 	return x + y;
// }

// var z = add(2,2);

// console.log(z);

// var greet = function sayHi(){
// 	console.log("Hi y'all!");
// }

// setTimeout(function() {
// 	console.log("yo!");
// }, 2000);

var greetingFunc = function buildGreeting(name){
	var greetingPrefix = "hello ";
	return greetingPrefix + name;
}

var greeting = greetingFunc("Steven");
console.log(greeting);



