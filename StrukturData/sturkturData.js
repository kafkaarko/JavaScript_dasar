// Object
// di awali dengan {}

const user = {
    firstName : "kafka",
    lastName : "laut",
    age : 17,
    isMarried : false,
    "hehea" : "kafka si bajak laut yang menyeramkan"
}
console.log(`Halo, nama saya adalah ${user.firstName} ${user.lastName}`);
console.log(`saya berumur ${user.age}`)
console.log(` ${user["hehea"]}`)

const Car = {
   name:" kafka si bajak laut yang perkasa nan gagah",
    jenis:"Mc laren",
    maxSpeed:1900,
    color:"blue"
}

Car.color = "navy";
Car.maxSpeed = 2200;
delete Car.color
// 22 - 24 itu mengubah nilai
console.log(Car)
// Car = { name : "kafka aja"}
// 27 itu menginisialisasi ulang lagi yang sudah jelas jelas itu constant
console.log(Car)
// mengubah sama menginisialisasi ulang nilai itu berbeda

// array
// beda dengan object array menggunakan [] sedangkan object {}
let myArray = ["coklat",42.5,22,true,"proggraming"];
console.log(myArray)

console.log(myArray[1])

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");
//push() -> untuk menanmbahkan value di akhir 
myArray.push('JavaScript')
console.log(myArray)
//pop() -> untuk menghapus value di akhir
myArray.pop()
console.log(myArray)
//shift() -> untuk mengahupus value diawal
//unshift() -> untuk menambahkan value di awal

myArray.shift()
myArray.unshift("Banana")
console.log(myArray)

//delete -> untuk menghapus value di dalam array dan membiarkannya kosong
delete myArray[1]
console.log(myArray)
//splice() -> menghapus index
myArray.splice(2,1)
console.log(myArray)
//contoh

const Month = ['January','March','April','May'];
console.log("Before splice : " , Month);

Month.splice(1,0 ,'Febuary')
console.log("after splice: ", Month)

// Speread Operator

const Favorite = ["Seafood","Salad","Nugget","Soup"];

console.log(...Favorite)

const other = ["Mie Ayam","Bujer","Pissa"]

let allVavor = [Favorite,other]

console.log(allVavor)

allVavor = [...Favorite,...other]

console.log(allVavor)

const obj1 = { firstName : "Kafka",age : 25};
const obj2 = { lastName : "arko",gender : "M"};

const newObj = {...obj1,...obj2}

console.log(newObj)

//Destructuring Object

const Profile = {
    firstName : "Jhon",
    lastName : "tod",
    age : 18
}

const { firstName , lastName , age , isMale = true} = Profile;
console.log(firstName,lastName,age)

let FirstName = "kafka si bajak laut yang perkasa";
let Age = 25;

({FirstName,Age} = Profile);

console.log(FirstName)
console.log(age)
//default Values = menambahkan yang bukan properti dari objek alternatif memakai = false or true
console.log(isMale)

//Desturucturing Array 
// arrrya di line 75

const [firsFood,secondFood,thirdFood,fourthFood ] = Favorite

console.log(firsFood)
console.log(secondFood)
console.log(thirdFood)
console.log(fourthFood)

const [ , , ThirdFood] = Favorite
console.log(ThirdFood)

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = Favorite

console.log(myFood)
console.log(herFood)

// array destructuring assignment sangat berguna ketika kita hendak menukar nilai antara dua variable

var a = 1;
var b = 2;
var temp;

console.log("sebelum swap")
console.log("Nilai a : " + a)
console.log("Nilai b : " + b)

temp = a;
a = b
b = temp

console.log("setelah swap")
console.log("Nilai a : " + a)
console.log("Nilai b : " + b)

// atau tanpa var temp

let i = 1;
let o = 2;

console.log("sebelum swap");
console.log("Nilai a : " + i);
console.log("Nilai b : " + o);

[i, o] = [o, i];  // This line swaps the values of i and o

console.log("setelah swap");
console.log("Nilai a : " + i);
console.log("Nilai b : " + o);

// map

//sama layaknya obeject tetapi map meperbolehkan tipe data apa pun

const myMap = new Map([
    ['1','a String key'],
    [1,'a number key'],
    [true,true]
])

console.log(myMap)

const capital = new Map([
    ['Jakarta',"Indoenesia"],
    ["London","England"],
    ["Tokyo","Japan"]
])

console.log(capital.size)
console.log(capital.get("London"))
capital.set("New Delhi","India")
console.log(capital.size)
console.log(capital.get("New Delhi"))

const wrongMap = new Map();
wrongMap["My Key"] = "My Value";

console.log(wrongMap.has("My Key"));
console.log(wrongMap.delete("My Key"));

//set
//tidak bisa di duplikasi

const numberSet = new Set([1,3,4,5,4,3])

console.log(numberSet)

numberSet.add(6)
numberSet.add(7)
numberSet.add(8)

console.log(numberSet)

numberSet.delete(3)

console.log(numberSet)

const restaurant = {
    name : "Bakso Mang Dicoding",
    city : "Bandung",
    favoriteDrink : "Es Teh",
    favoriteFood : "Bakso",
    isVegan : false
}

let Name = restaurant.name;
let favoriteDrink = restaurant.favoriteDrink;

console.log(Name)
console.log(favoriteDrink)


const currency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500]
])

const priceInJPY = 5000;

const priceInIDR = priceInJPY  * currency.get("JPY")
console.log(priceInIDR)

const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
}

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
delete artistsAndSongs["Keyakizaka46"];
artistsAndSongs["Blackpink"].push("Rose - Gone");

console.log(artistsAndSongs);