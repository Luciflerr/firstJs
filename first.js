console.log('Hello, its my first javascript code');
console.log('YEEEEEYYYY!!!!');

/* let const bunlar isimlendirir fakat
const sabit hiç değişmeyen isimlerdir
let ise değiştirilebilir isimlere koyulur. */

let hafta = "pazartesi";

if (hafta === "pazartesi") {
    console.log("Pazartesiden nefret ediyorum!!!")
}
else if (hafta === "cumartesi") {
    console.log("Hafta sonunu seviyorummm!!!!!")
}

let phrase = 'anything';

if (phrase === 'stop') {
       console.log('red')
   }
   else if (phrase === 'slow') {
       console.log('yellow')
   }
   else if (phrase === 'go') {
       console.log('green')
   }
   else {
       console.log('purple')
   }
//password

const password = prompt('Enter your password');

if (password.length >= 6) {
    console.log('Yeterince uzun password')
}
else {
    console.log('Kısa password')
} 

if (password.indexOf(' ') === -1) {
    console.log('Boşluk yok')
}
else {
    console.log('Boşluk var tekrar deneyiniz.')
}

//bunun daha kısa bir versiyonu yani daha optimize versiyonunu altına yazıyorum

const password = prompt('Enter your password');

if (password.length >= 6 && password.indexOf(' ')) {
    console.log('Correct Password')
}
else {
    console.log('IncorrectPassword')
}
// Veya kısımı örnek

let yasiniz = prompt('Yasinizi giriniz.');

if (yasiniz < 5 || yasiniz >= 65) {
    console.log('Free')
}
if else (yasiniz <= 10) {
    console.log('10 dolar')
}
if else (yasiniz <= 20) {
    console.log('20 dolar')
}

const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

airplaneSeats [3][1] = "Hugo";

const kitchen {
    isFunny : true,
    favNum   : 211.7,
    colors   : ['red', 'blue']
};

//////

const midterms {
    danielle : 96,
    thomas : 87
}

midterms['danielle'] = 'A+'

midterms['thomas'] = 'A'

midterms.ezra = 'B+'

midterms.antonio = 'C+'

///////////////////////
let input = prompt('Hey, Say something')
while (true) {
    input = prompt(input)
    if (input.toLowerCase() === 'stop copying me') break;
}
console.log('Ok You Win!')
///////////////////////////
for (let i = 0; i < 1000; i++) {
    console.log(i);
    if (i === 100) break;
}
///////////////////////////
let maximum = parseInt(prompt('Enter Maximum Number!'));
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number!'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum)
///////////////////////////

///////////////////////////

///////////////////////////

///////////////////////////
let isim = prompt("Adınızı girin:");
if (isim == "eray") {
console.log("Hoşgeldin Eray");
}
else if (isim == "damla") { console.log("Hoşgeldin Damla.") }
else if (isim == "buğra") { console.log("Hoşgeldin Buğra.") }
else { console.log ("Hoşgeldiniz fakat sizi tanımıyoruz.") }

—————————————-
—————————————-

let eray;
prompt("İsminizi giriniz.");
for (eray = "eray"; eray == eray;) {
console.log("Hoşgeldin Eray");
break;
}
—————————————
—————————————
//Girilen iki sayıdan hangisinin daha küçük olduğunu yazdıran kod JS:
let sayi = parseInt(prompt("Sayı giriniz."));
let sayi2 = parseInt(prompt("Sayı Giriniz."));
if(sayi > sayi2) {
    console.log(sayi2);
}
else{
    console.log(sayi);
}
—————————————
—————————————
//Ortalamasını hesaplayan kod js:
let sayi = parseInt(prompt("İlk Sayı"));
let sayi2 = parseInt(prompt("Son Sayı"));
let toplam = (sayi + sayi2) / 2;
console.log(toplam);
parseInt yazmamızın sebebi kullanıcının sayı girmesi için. 
—————————————
—————————————
Bir öğrencinin almış olduğu vize ve final notunu hesaplayan kod JS:
let vize = parseInt(prompt("Vize notunuzu giriniz:"));
let final = parseInt(prompt("Final notunuzu giriniz:"));
let vize40 = vize / 40;
let final60 = final / 60;
console.log((vize40 + final60) / 2);
—————————————
—————————————
3 sayıdan en büyüğünü bulan kod JS:
let sayi1 = parseInt(prompt("Sayı Gir:"));
let sayi2 = parseInt(prompt("Sayı Gir:"));
let sayi3 = parseInt(prompt("Sayı Gir:"));

if(sayi1 > sayi2 && sayi1 > sayi3) {
    console.log("En büyük yazılan rakam : " + sayi1);
} else if(sayi2 > sayi1 && sayi2 > sayi3) {
    console.log("En büyük yazılan rakam : " + sayi2);
} else if(sayi3 > sayi1 && sayi3 > sayi2){
    console.log("En büyük yazılan rakam : " + sayi3);
}
—————————————
—————————————

—————————————
—————————————

—————————————
—————————————
