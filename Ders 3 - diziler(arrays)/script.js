/*

push() - pop() - shift() - unshift() - concat() - slice() - splice()
filter() - includes() - indexOf()

*/

// PUSH = DİZİNİN SONUNA EKSTRA ELEMAN EKLER

let dizi1 = ["koray", "ahmet", "ali", "ayşe"];

dizi1.push("mustafa", 15, true);
console.log(dizi1);


// POP = DİZİDEKİ SON ELEMANI KALDIRIR VE O ELEMANI DÖNDÜRÜR

let dizi2 = ["koray", "ahmet", "ali", "ayşe"];

const result = dizi2.pop(); // const result ile pop'a değiştirilemeyen bir result değişkeni atamış olduk
console.log(dizi2);
console.log(result); // ve bu result'u, pop()'un ayşe'yi döndürdüğünü; o sonucu verdiğini göstermek için kullandık


// SHİFT = POP UN TAM TERSİ, DİZİNİN BAŞINDAKİ ELEMANI KALDIRIR VE O ELEMANI DÖNDÜRÜR

let dizi3 = ["koray", "ahmet", "ali", "ayşe"];

let result1 = dizi3.shift(); // önceden resultu tanımladığımız için konsolun izin vermesi adına result1 yaptım
console.log(dizi3);
console.log(result1); // döndürdüğü eleman


// UNSHİFT = DİZİNİN BAŞINA ELEMAN EKLER VE YENİ SONDA OLUŞAN DİZİ ELEMANI SAYISINI(UZUNLUĞUNU) DÖNDÜRÜR

let dizi4 = ["koray", "ahmet", "ali", "ayşe"];

let result2 = dizi4.unshift(1,4);
console.log(dizi4);
console.log(result2); // döndürdüğü sayı


// CONCAT = İKİ VEYA DAHA FAZLA DİZİYİ BİRLEŞTİRİP TEK DİZİ HALİNE GETİRİR

let dizi5 = ["koray", "ahmet", "ali", "ayşe"];
let dizi6 = [1,4];

let result3 = dizi5.concat(dizi6); // dizi6'yı dizi5'e ekliyoruz
console.log(result3);


// SLİCE = DİZİNİN BELİRLİ BİR KISMINI ALIR VE YENİ BİR DİZİ DÖNDÜRÜR AMA ORİJİNAL DİZİYİ DEĞİŞTİRMEZ

let dizi7 = ["koray", "ahmet", "ali", "ayşe"];

let result4 = dizi7.slice(1,3); // indeks 1 den(1 dahil) 3 e kadar(3 dahil olmadan) arasındaki elemanları alır
console.log(result4); // bu aralıktaki elemanları döndürür


// SPLİCE = ORİJİNAL DİZİYİ DEĞİŞTİRİR, SİLDİĞİ ELEMANLARI DİZİ OLARAK DÖNDÜRÜR

let dizi8 = ["koray", "ahmet", "ali", "ayşe"];

let result5 = dizi8.splice(1,3); // indeks 1 dahil 3 e kadar ve 3 de dahil olmak üzere bu elemanlar orijinalden ayrılır
console.log(dizi8); // splicedan sonra silinen elemanlar hariç geri kalan elemanları yazar
console.log(result5);


// FİLTER = DİZİDEKİ ELEMANLARI KOŞULLARA GÖRE FİLTRELER VE O ELEMANLARDAN YENİ DİZİ YAPAR AMA ORİJİNAL DİZİYİ DEĞİŞTİRMEZ

let dizi9 = [1,2,3,4,5];

let yeniDizi = dizi9.filter((ogrenci) => ogrenci > 2); // 2 den büyük olanlar artık yeniDizi'nin içindeki ogrenci olacak
console.log(yeniDizi);


// İNCLUDES = DİZİ İÇİNDE BELİRLİ Bİ DEĞER VAR MI YOK MU ONU DÖNDÜRÜR

let dizi10 = [1,2,3,4,5];

let varMi = dizi10.includes(1); // 1 var mı yok mu, varsa = true yoksa = false
console.log(varMi);


// İNDEX OF = DİZİDEKİ DEĞERIN KAÇINCI OLDUĞUNA BAKAR VE İNDEKS NUMARASINA GÖRE DÖNDÜRÜR

let dizi11 = [1,2,3,4,5];

let varMi1 = dizi11.indexOf(3); // 3 sayısı kaçıncı indexte diye bakar
console.log(varMi1);