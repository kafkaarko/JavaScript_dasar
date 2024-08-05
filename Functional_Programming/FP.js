//paradigma functional programing

//gaya code imperatif

const names = ['kafka','jony','jeg','tot'];

const newNameWithExcMark = [];

for(let i = 0 ; i  < names.length; i++){
    newNameWithExcMark.push(`${names[i]}!`)
}

console.log(newNameWithExcMark)

//gaya code deklaratif

const namE = ['kafka','jony','jeg','tot'];

const newNameWithExcMar = namE.map((name) => `${name}`)


console.log(newNameWithExcMar)

//konsep konsep functional programming

//ada 4

//Pure Function
//Pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya.

let PI = 3.14

const hitungLuarLingkaran = (jariJari) =>{
    return PI * (jariJari * jariJari);
}

console.log(hitungLuarLingkaran(4));

PI = 5;

console.log(hitungLuarLingkaran(4));
//ini termasuk impure function kerena dia membutuh nilai dari PI

const HLL = (jariJari) => {
    return 3.14 *(jariJari * jariJari);
}

console.log(HLL(4)); 
console.log(HLL(4)); 
console.log(HLL(8)); 
console.log(HLL(8)); 

//ini termasuk pure functional karena 3.14 constant

//Selain dilarang untuk bergantung terhadap nilai luar, pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja. Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.


//ini adalah contoh lain imper
const createPersonWithAge = (age, person) => {
    person.age = age;
   return person
    
  };
  
  const person = {
    name: 'Bobo'
  };

  const age = {
    age : 15
  }
  
  const newPerson = createPersonWithAge(18, person);
  
  console.log({
    person,
    age,
    newPerson
  });


  const createPersonWithAg = (age, person) => {
    return { ...person, ...age };
  };
  
  const perso = {
    name: 'Bobo'
  };
  
  const newPerso = createPersonWithAg(age, perso);
  
  console.log({
    perso,
    age,
    newPerso
  });

  //dan ini ada pure

//immutability
// Immutable berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat. 

const Names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log({
    Names,
    newNamesWithExcMark,
});
//cara merubah nilai dari sebuah objek

const user = {
    frintName : 'harry',
    lastName : 'poeh', //typo banget ini mah
}
//hindari code seperti ini jika ingin paradigma FP
const renameLastNameUser = (newLastNam , user) => {
  user.lastName = newLastNam;
}
renameLastNameUser('potter',user);
console.log(user)

//lakukan seperti ini

const createUserWithNewsLastName  = (newLastName , user) => {
  return{ ...user, lastName : newLastName}
}

const newUser = createUserWithNewsLastName("potter",user);

console.log(newUser);

//Rekurusif
//rekursif merupakan teknik pada sebuag function yang memanggil dirinya sendiri

//contoh rekursif

const countDown = start => {
  console.log(start);
  if(start >  0) countDown(start -1)
};

countDown(10)

//highe-order function

//contoh

const hello = () => {
  console.log("hello")
}

const say = (someFunction) => {
  someFunction()
}

const sayHello = () =>{
  return () =>{
    console.log("hello!")
  }
}

hello();
say(hello);
sayHello()();

//Higher-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya.

const nam = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if(!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return loopTrough(arr, action);
}


const newNames = arrayMap(nam, (name) => `${name}!` );

console.log({
  nam,
  newNames,
});

//Reuseable function

//array.map()

const newArray = ['harry','Ron','Jeff','Thmas'].map((name) => {return `${name}!`});

console.log(newArray);

//array.filter()
const truthArray = [1,'',"hallo",0,null,'harry',14].filter((item)=> Boolean(item))
console.log(truthArray)

//cara lain

const students = [
  {
    name: 'Harry',
    score: 60,
  },
  {
    name: 'James',
    score: 88,
  },
  {
    name: 'Ron',
    score: 90,
  },
  {
    name: 'Bethy',
    score: 75,
  }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);

//array.reduce()

const totalScore = students.reduce((acc,student)=> acc + student.score,0)
console.log(totalScore)

//array.some()

const array = [1,2,3,4,5];
const even = array.some(element => element % 2 == 0);

console.log(even)

//arrray.find()


const findJames = students.find(student => student.name === 'James')

console.log(findJames);

//array.sort()
//mengurutkan data secara ASC (sesuai abjad)
const moths = ['March', 'Jan','Feb','Dec'];
moths.sort();
console.log(moths);

const array1 = [1,30,4,1000,101,121]
array1.sort()
console.log(array1)
//ini bertipe data string

const compareNumber = (a,b) =>{
  return a - b;
};

const sorting = array1.sort(compareNumber);
console.log(sorting);

//array every

const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

//array.foreach()


const n = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
n.forEach((name) => {
  console.log(`Hello, ${name}!`);
});


const books = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
  { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
  { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
  { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
  { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

const bestSellingBooks = books.filter((books) => books.sales > 1000000);
const greatAuthors = bestSellingBooks.map((book) => {return`${book.author} adalah penulis buku ${book.title} yang sangat hebat!`});
console.log(bestSellingBooks)
console.log(greatAuthors)