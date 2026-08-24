//  Döngüler 1 - for , forEach

// 0'DAN 10'A KADAR(10 DAHİL) 1 ER 1 ER ARTIRARAK YAZAR

for(let a = 0; a <= 10; a++) {
    console.log(a);
}


// DİZİDEKİ İNDEKS NO. DEĞERİNİ 0'DAN BAŞLAYIP ARTIRARAK DİZİ ELEMANLARINI TEKER TEKER YAZAR

let arr = [10,20,30];

for(let i = 0; i < arr.length; i++) { // arr dizisinin uzunluğu, son indeks numarasından 1 fazladır, bu yüzden i < arr.length koşuluyla dizinin tüm elemanları yazılabilir
console.log(arr[i]);
}