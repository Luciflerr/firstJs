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

// YOUR CODE GOES BELOW THIS LINE:

airplaneSeats [3][1] = "Hugo";
