// Spread Operatörü

const arr1 = [1,2,3];

const arr2 = [5,6,7,8,9,10];

const newArr = [...arr1, ...arr2, 110, 250]; // iki diziyi tek bir dizi içinde birleştirdik ve canımız istediğinden 2 tane daha eleman ekleyip lengthini arttırdık

console.log(newArr);



const word = "merhaba";
const letters = [...word]; // kelimedeki her bir harfi dönüştürdü

console.log(letters);




const user = {
    name:"ali",
    age:25,
}

const copyUser = {...user}; // orjinal user array'ini kopyalıyoruz

console.log(user);
console.log(copyUser);




const user2 = {
    name:"ali",
};
const user3 = {
    age:25
};

const newUser = {...user, ...user3}; // iki farklı objeyi birleştirerek yeni bir değişken oluşturduk

console.log(newUser);

