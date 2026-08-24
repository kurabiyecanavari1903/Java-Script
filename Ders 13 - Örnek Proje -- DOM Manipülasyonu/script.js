let sayi = 0;

const sayiElement = document.getElementById("count") 
// html'de id yerine span class yazsaydık document.querySelector(".ahmet") ile de aynı şekil çalıştırabilirdik

function guncelleSayi() {
sayiElement.innerText = sayi;
}

function arttir() {
    sayi++
    guncelleSayi();
}

function azalt() {
    if(sayi > 0) {
    sayi--
    guncelleSayi();
    }
}


