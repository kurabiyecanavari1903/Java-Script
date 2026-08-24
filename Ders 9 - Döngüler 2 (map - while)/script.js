// Döngüler 2 - Map, While, Arrow Function

// MAP = DİZİDEKİ HER DEĞERİ DÖNÜŞTÜRÜP YENİ BİR DİZİ OLUŞTURMAK(return kullanılır)
let sayilar = [1,2,3,4];

let yeniSayilar = sayilar.map((item) => {
    return item * 2;  
});

console.log(yeniSayilar);



// WHİLE = KOŞUL DOĞRU OLDUĞU SÜRECE KODU DÖNGÜDE ÇALIŞTIRIR
let yas = 14;

while(yas < 20) {
    console.log(yas);
    yas += 1; // döngüyü kırmak için 14 ü arttırarak 20 ye kadar ulaştırırız
}
// eger yas i arttırmadan kodu yazsaydik while sonsuz bir döngüye girecekti.