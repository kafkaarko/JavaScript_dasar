// Menulis kode javacript pertama
console.log("Hello Wolrd!")

// coments
//ini merupakan komentar satu baris, kode di bawah tidak akan dijalankan
//console.log("kafka arko ardissya")
/* ini juga merupakan sebuah komentar yang mencakup lebih luas lagi */

// variable
// JS ada tiga cara untuk medeklarasikan sebuah variable yaitu menggunaka kerword var,let dan const namun pada tahun 2015,var di anggap rawan bug dan alhasil yang di pakai hanya let dan const
//contoh

let lastnama;
lastname  = "ardissya"

console.log(lastnama)

// dan bisa juga

let lastnamee = "ardissya"
console.log(lastnamee)


let lastName;
let fullName =  lastName
fullName = (lastName = "SkyWalker")
fullName = "luke " + lastName
console.log(fullName)

//const
// phi itu constant dan tidak bisa di ubah ubah sebelum ada nilai default
const phi = 3.14
console.log(phi)
// phi = 2
// console.log(phi)

//Tipe Data

//undifined
let x;
console.log(typeof(x))

// Numbers
let k = 10
let ka = 3.14
console.log(typeof(k))
console.log(typeof(ka))

/*Operator	Fungsi	Contoh
+	Penjumlahan	10 + 10 = 20
-	Pengurangan	15 - 7 = 8
/	Pembagian	21 / 7 = 3
*	Perkalian	9 * 9 = 81
%	Sisa hasil bagi	5 % 2 = 1
**	Perpangkatan	3 ** 3 = 27*/
//contoh

let a = 19
let b = 5

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)

// dan juga ada increment dan decrement
// increment ++ = x++
//decrement -- = --x


let positifx = 5;
console.log(positifx++)
console.log(positifx)

let prefix = 5
console.log(++prefix)

//BigInt

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(typeof(bigNumber));
console.log(myInt);

const BigIntButSmall = 7n;

console.log(5n + 2n);
console.log(3n - 2n);
console.log(9n * 10n);
console.log(98n / 22n);
console.log(55n % 22n);

// Strings
// string = "" yang ada blacqoute atau singeqoute ''

let greet = "hello";
console.log(typeof(greet))

let question = '"what do you think of JavaScipt?" I asked?'

console.log(question)

const answer = '"I think it\'s awesome!" he answered confidently';

console.log(answer);
// solusi agar tidak terjadi bug menggunakan \

//string juga bisa di tambahkan op +
let Greet = "kafka";
let MoreGreet = Greet + " "  + Greet
console.log(MoreGreet)

// string pada JavaScript juga mendukung string interpolation  
const MyName= "kafka si bajak laut";
console.log(`Hello, my name is ${MyName}`)
//mengunakan backtick dan dollar ` dan $

// Boolean
let X = true
let Y = false

console.log(typeof(X))
console.log(typeof(Y))

//kita juga bisa menggunakan op > (lebih dari) atau < (kurang dari)

const A = 20
const B = 21

let isGreater = a > B
let isLess = a < B

console.log(isGreater)
console.log(isLess)

// null

let someLateData = null
console.log(someLateData)

const id = Symbol("id");

console.log(id)
//meskipun sama tapi jika di sandingkan mereka ini berbeda
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

// Operator

// Assignment Operator

//Pada dasarnya operator ini adalah tanda sama dengan (=), di mana tanda ini digunakan untuk menginisialisasi nilai pada variabel. Tempatkan variabel yang ingin diberi nilai di sebelah kiri, sementara nilainya di sebelah kanan. Di antara keduanya terdapat operator assignment.

let i = 90
let o = 9

i += o

console.log(i)

/*
Pada contoh kode di atas, terdapat expression x += y; Apa artinya? Assignment operator tersebut digunakan sebagai shortcut dari x = x + y. Cara ini juga dapat digunakan pada operator aritmatika lain seperti, perkalian, pengurangan, pembagian, dan lainnya.

let x = 90;
let y = 9;
 
x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;
*/

// Comparison Operator

/*
Terdapat serangkaian karakter khusus yang disebut dengan operator pembanding/komparasi yang dapat mengevaluasi dan membandingkan dua nilai. Berikut daftar operator dan fungsinya:

Operator	Fungsi
==	Membandingkan kedua nilai, tetapi mengabaikan tipe data.
!=	Membandingkan kedua nilai haruslah tidak sama, tetapi mengabaikan tipe data.
===	Membandingkan kedua nilai beserta tipe data.
!==	Membandingkan kedua nilai beserta tipe data haruslah tidak sama.
>	Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
>=	Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
<	Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
<=	Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua. */

let g = 50
let h = 90

console.log(g < h);
console.log(g > h);

//perbedaan sama dan indentik
//sama = ==
//indentik = ===

const aString = '90';
const aNumber = 90;

console.log(aString == aNumber)
console.log(aString === aNumber)

//Logical Operator

/**
 * Operator	Deskripsi
&&	Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi       terpenuhi (bernilai true).

||	Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true).

!
Operator tidak (not). Digunakan untuk membalikkan suatu kondisi.
 */

// and &&
console.log(g < 51 && h > 89) // (true && true) -> True
console.log(g > 51 && h > 89) // (false && true) ->false

// or ||

console.log(g < 51 || h > 89); // (true || true) -> true
console.log(g > 51 || h > 89); // (false || true) -> true

/* NOT operator */
console.log(!(g < 51)); // !(true) -> false
console.log(!(h < 51 && h > 89)); // !(true && true) -> !(true) -> false


// if/Else Statement

const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan")
if(isRaining){
    console.log("Hari ini hujan. Bawa payung")
}
console.log("berangkat kegiatan")

// jika isRaining false maka sistem tidak membaca "hari ini hujan bawa payung"

let f = 120

if(f > 120){
    console.log(f)
}else{
    console.log("nilai kurang dari 120")
}

let language = "French";
let greeting = "selamta pagi"

if(language === "English"){
    greeting = "Good morning"
}else if(language === "French"){
    greeting = "Bounjour"
}else if (language === "japanese"){
    greeting = "Ohayou Gozaimasu"
}

console.log(greeting)

// if else hanya satu baris

const isMember = false
const discount = isMember ? 0.1 : 0;
console.log(`anda mendapakatkan diskon sebersar ${discount* 100 }%`)

let namaa = "kafka si bajak laut yang paling perkasa di seluruh lautan dan samudera";

if(namaa){
    console.log(`Halo, ${namaa}`);
}else{
    console.log("ini mah masih kosong bjir")
}


//swicth case

let languagee = "indonesia"
let gre = ""

switch(languagee){
    case "English":
        gree = "good morning"
        break;
    case "French":
        gree = "Bounjour!"
        break;
    default:
        gree = "iii kanjut akau"
}

console.log(gree)

// loop

//for loop
for(let i = 0; i<5; i++){
    console.log(i)
}

let myArray = ["kafka","si","bajak","laut","yang","menyeramkan"]

for(const ArrayItem of myArray){
    console.log(ArrayItem)
}

//while and do-while

let I = 1;

while (I  <= 100){
    console.log(I)
    I++
}

let O = 100;

do{
    console.log(O)
    O--;
}while (O >= 1)


var age = 20
console.log(age)
var age = 80 
console.log(age)