// function
/* multipy(a , b => ini disebut parameter){
    return a * b
}
multipy(2,3 => disebut argumnen)
*/

function multipy(a,b){
    return a * b
}

console.log(multipy(5,6))

function Hello(){
    console.log("hello world guys");
}

Hello()

//contoh paramater nama dan umur

function CekUmur(nama , umur){
    if(umur > 88){
        console.log(`kamu udh tua banget sih ${nama}`)
    }else if(umur > 50){
        console.log(`kamu usia waduh ${nama}`)
    }else if(umur > 35){
        console.log(`kamu usia pemuda ${nama}`)
    }else if(umur > 20){
        console.log(`kamu usia matang ${nama}`)
    }else{
        console.log(`kamu masih muda dek dek`)
    }
}

CekUmur("kafka",3)

const greeting = function(name, language) {
    if(language === "English") {
      return "Good Morning " + name + "!";
    } else if (language === "French") {
      return "Bonjour " + name + "!";
    } else {
      return "Selamat Pagi " + name + "!";
    }
  }
  
  console.log(greeting('Jawa dari sumatra', 'English'));

//function parameter

const User = {
    id : 24,
    displayName : "kafka",
    fullName : "kafka bajak laut yang jahat banget dari selat sunda yang mengerikan",
}

function Name({displayName, fullName}){
    console.log(`nama kamu adalah ${displayName} ,  dan kamu pasti adalah ${fullName}`)
}

Name(User);

//default parameter
// kita bisa memasukan arugumen tanpa memenuhi syarat dari parameter

function exponentsFormula(baseNumber, exponent) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
  }
  
exponentsFormula(2);

// ini bakal di baca undifinid karena tidak memenuhi syarat kecuali di parameter ada nilai dafault


function exponents(baseNumber, exponent = 20) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
  }
exponents(3)

//rest parameter 

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
  
  console.log(sum(1, 2, 3, 4, 5,6,7,8,9,10));

//arrow function
//diawali dengan =>


//function declaration
function sayHello(greet){
    console.log(`${greet}`)
}

//function expression

const sayName = function (Name){
    console.log(`nama saya adalah ${Name}`)
}

  
//function declaration

const sayHell = (greet) => {
    console.log(`${greet}`);
}

//function expression
const sayIt = (mama) => {
    console.log(`nama saya adalah ${mama}`)
}

//disetiap arraw function kita tidak usah menggunakan function

sayName("kafka")

// tanpa paramter

const sayItt = () => {
    console.log("kafka gantebg banget sih awwww")
}

sayItt()

//arraw juga bisa satu baris code line

const sayY = (nama) => console.log(`hai kamu pasti ${nama}`)
sayY("kafka si bajak laut yang menyeramkan sari selat sunda")

const sy = () => console.log("kosong mulu hidup nya ")
sy()

const mult = (a,b) => a*b
console.log(mult(2,5))

//variable scoop

/*global variable, dapat diakses pada parent() dan child()
const a = 'a'; 
 
function parent() {
    local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
  const b = 'b'; 
    
  function child() {
     local variable, dapat diakses hanya pada fungsi child().
    const c = 'c';
  }
}
*/

function multiply(num) {
    total = num * num;
    return total;
  }
  
  let total = 9;
  let number  = multiply(20);
  
  console.log(total)

//Closure

//function yang bersarang

function init() {
    const Nama = "Kafka";
  
    function greet() {
      console.log(`Halo, ${Nama}`);
    }
  
    greet();
  }
  
console.log(init());
  

function ini(){
    const Nama = "kafka"

    function gret(){
     console.log(`Halo,${Nama}`)
}
    return gret()

}

const myFunction = ini();
console.log(myFunction)

const add = () => {
    let counter = 0;
      return () => {
        return ++counter;
    };
  }
  
  const addCounter = add();
  
  console.log(addCounter());
  console.log(addCounter());
  console.log(addCounter());

const minimal = (a,b) => {
    if(a < b){
        return a
    }else if(a == b){
        return a
    }else{
        return b
    }
}

console.log(minimal(4,2))

const findIndex = (array , number) => {
    for(let i =0; i<number ; i++){
        if(array[i] === number){
            return i
        }
    }
    return -1
}

console.log(findIndex([1,2,3,4,5],3))