// Javascript Object ve Array Destructuring



// Object Destructuring
let user = {
    name:"ahmet",
    age: 25,
    isLogin: true,
    skills: ["html", "css", "javascript"],
    color: "red",
};

let {name,age, ...rest} = user; 
// alt alta "let name = user.name" ve "let name = user.age" yerine bu ikisini daha kısa ve basit şekilde yazıyoruz yani yapısını değiştirip destruct etmiş oluyoruz.

console.log(name,age);
console.log(rest);



// Array Destructuring

let numbers = [1,2,3]

const [a, ...rest1] = numbers;

console.log(rest1);
console.log(a);