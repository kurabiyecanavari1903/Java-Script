// Döngüler 3 - filter, find


// FİLTER = BELLİ KOŞULLARI SAĞLAYAN BİRDEN FAZLA ELEMANLARI YENİ BİR DİZİ İÇERİSİNDE GERİ DÖNDÜRÜR

let dizi = ["muz", "elma", "armut", "portakal", "mandalina"];

const kelime = dizi.filter((eleman) => eleman.length >= 5);
console.log(kelime); // 5 veya 5'ten uzun harfli kelimeleri yaz


// FİND = KOŞULDAKİ İLK ELEMANI DÖNDÜRÜR

let dizi1 = [1,5,10,15,20]; // 10 elemanı 15 ten sıra olarak önde olduğu için 10 yazılır, önemli olan sıradır, büyüklük değil!

const numbers = dizi1.find((eleman) => eleman > 5); 

console.log(numbers); // 5'ten büyük elemanları döndür fakat find dediğimiz için ilk 5'ten büyük ilk '10' sayısı olduğundan 10 yazılır


// Örnek

let users = [
    {id:1, name:"ali"},
    {id:2, name:"ayşe"},
    {id:3, name:"mehmet"}
]

const user = users.find((item) => item.id === 2);
const user1 = users.find((item) => item.name.length > 4)

console.log(user);
console.log(user1);
