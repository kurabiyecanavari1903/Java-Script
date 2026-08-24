// Koşullar if-else   else if = elif

let yas = 21

if (yas >= 18) {
console.log("Reşitsiniz."); 
} else if (yas < 18) {
console.log("Reşit değilsiniz!");
}

let puan = 75

if (puan >= 90) {
    console.log("AA");
} else if (puan >= 80) {
    console.log("BA");
} else if (puan >= 70) {
    console.log("BB");
} else {
    console.log("Kaldı");
}


let skor = 90

if (skor > 80 && skor < 90) {
    console.log("koşul sağlandı!")
} else {
    console.log("koşul sağlanmadı!")
}


let dizi = [1,2,3,4,5,6]

const control = [4,6]
if (control.every(islem => dizi.includes(islem))) {
    console.log("Bu dizi hem 4 hem 6 içeriyor")
}
else if (dizi.includes(6)) {
  console.log("Bu dizi 4'ü içeriyor.")
} else if (dizi.includes(30)) {
  console.log("Bu dizi 30'u içeriyor.")
}
  else if (dizi.includes(9)) {
  console.log("Bu dizi 9'u içeriyor.")
}