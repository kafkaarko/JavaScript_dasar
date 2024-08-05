//contoh oop di js

const car = {
    //propertis
    brand : "Frod",
    color : "Blue",
    maxSpeed : 250,
    chassisNumber : "f-2",
    //method
    drive : () => {
        console.log("driving")
    },
    reverse : () => {
        console.log("reversering")
    },
    turn : () => {
        console.log("turning")
    },
}

console.log(car.brand);
console.log(car.color);
console.log(car.maxSpeed);
console.log(car.chassisNumber);
car.drive();
car.reverse();
car.turn();

//constructor Function

function Car(brand,color,maxSpeed,chassisNumber){
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber
}

Car.prototype.drive = function()  {
    console.log(`${this.brand} ${this.color} is driving`)
}

Car.prototype.reverse = function(){
    console.log(`${this.brand} ${this.color} is reversing`)
}

Car.prototype.turn = function(){
    console.log(`${this.brand} ${this.color} is turning`)
}

//membuat object dengan contructor Car

const car1 = new Car("Samsung","navy",250,"to-1");
const car2 = new Car("Apple","green",300,"p-0");
const car3 = new Car("xiomi","black",390,'hi-0');

car1.drive();
car2.drive();
car3.drive();

console.log(car1)
console.log(car2)
console.log(car3)

//contruvtion tidak bisa di pakai oleh arrow funtion

class Carr {
    constructor(brand, color, maxSpeed, chassisNumber) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.chassisNumber = chassisNumber;
    }
   
    drive() {
      console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn() {
      console.log(`${this.brand} ${this.color} is turning`);
    }
  }

  const car4 = new Carr("Samsung","navy",250,"to-1");
const car5 = new Carr("Apple","green",300,"p-0");
const car6 = new Carr("xiomi","black",390,'hi-0');

car1.drive();
car2.drive();
car3.drive();

console.log(car4)
console.log(car5)
console.log(car6)

//properti dan method

//properti = yanng mendefinisikan nilai nilai yagn terkandung dalam sebuah intance class
//contoh lain selain Car

class Mail{
    constructor(sender,receiver,subject,body){
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.body = body;
    }
}

const surat = new Mail("kafka","ganyu",'lorem','loveyaa')

console.log(surat)
//kita juga bisa menambahkan nilai langsung di contructor
class Carrr {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      // Set a random chassis number
      this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }
  }
   
const car7 = new Carrr('BMW', 'red', 200);
const car8 = new Carrr('Audi', 'blue', 220);
const car9 = new Carrr('BMW', 'black', 250);
 
 console.log(car7);
 console.log(car8);
 console.log(car9);

//properti setter dan getter

car9.chassisNumber = "JMK"
console.log(car9);

//ada dua tipe properti yaitu data property dan accessor property
//data properti = properti yang langsung mengmpung sebuah nilai di dalam sebuah objek
//accessor properti = yang di kontrol oleh setter dan getter dengan method get dan set

class User{
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //accessor property
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
        const [firstName,lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User("kafka",'ardissya');
console.log(user);
console.log(user.fullName);


user.fullName = 'fulan fulanah'
console.log(user)
console.log(user.fullName)

class Carrrr {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }
   
    get chassisNumber() {
      return this._chassisNumber;
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
  }
   
  const carr = new Carrrr('BMW', 'red', 200);
  console.log(carr.chassisNumber);
  carr.chassisNumber = 'BMW-1';
  console.log(carr.chassisNumber);

//Method
//method = function

class Maill {
    constructor(sender, receiver, subject, body) {
      this.sender = sender;
      this.receiver = receiver;
      this.subject = subject;
      this.body = body;
      this._id = this._id();
    }
   
    get id(){
        return this._id
    }
    // Methods
    send() {
      console.log(`Sending mail from ${this.sender} to ${this.receiver} and your id ${this._id}`);
    }
   
    sendLater(delay) {
      console.log(`Sending after ${delay} ms`);
   
      setTimeout(() => {
        this.send();
      }, delay);
    }
   
    saveAsDraft() {
      console.log('Saving mail as draft');
    }

    _id(){
        return `${Math.random() * 200}`
    }
  }
const mail = new Maill("kafka","ganyu","tree",'love yaa')
mail.send();


//visibilty

class Ca {
    #chassisNumber = null;
   
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.#chassisNumber = this.#generateChassisNumber();
   }
   
    get chassisNumber() {
      return this.#chassisNumber;
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
   
    // Methods
    drive() {
      console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn(direction) {
      console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }
   
    #generateChassisNumber() {
      return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
  }
  
//pewarisan

class WhatsAppServicee {
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
   
    sendBroadcastMessage(message, receivers) {
      for (const receiver of receivers) {
        this.sendMessage(message, receiver);
      }
    }
  }
   
  class EmailServicee {
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
   
    sendDelayedMessage(message, receiver, delay) {
      setTimeout(() => {
        this.sendMessage(message, receiver);
      }, delay);
    }
  }
  //contoh jika tidak menggunakan inharetance
//super class
class MailServicee{
    constructor(sender){
        this.sender = sender;
    }


    sendMessage(messege, receivet){
        console.log(`${this.sender} sent ${messege} to ${receivet}`)
    }
}
//subclass
class WhatsAppServiceee extends MailServicee{
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
          this.sendMessage(message, receiver);
        }
      }
}
class EmailServiceee extends MailServicee{
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
          this.sendMessage(message, receiver);
        }, delay);
      }
}
const whatsapp = new WhatsAppServiceee('+6285694502613');
const email = new EmailServicee("kafffka12@gmail.com")

whatsapp.sendMessage("hello", '+6285694502613')
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);

  //intanceof
  //mengecek objek yang turunan dari kelas yangbenar
  console.log(whatsapp instanceof WhatsAppServiceee)
//pewarisan tanpa class

function MailService(sender) {
    this.sender = sender;
  }
   
  MailService.prototype.sendMessage = function (message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
   
  function WhatsAppService(sender) {
    MailService.call(this, sender);
  }
   
  // Prototype inheritance
  WhatsAppService.prototype = Object.create(MailService.prototype);
  WhatsAppService.prototype.constructor = WhatsAppService;
   
  WhatsAppService.prototype.sendBroadcastMessage = function (message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
   
  function EmailService(sender) {
    MailService.call(this, sender);
  }
   
  // Prototype inheritance
  EmailService.prototype = Object.create(MailService.prototype);
  EmailService.prototype.constructor = EmailService;
   
  EmailService.prototype.sendDelayedMessage = function (message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
   
  const whatsap = new WhatsAppService('+6281234567890');
  const emai = new EmailService('dimas@dicoding.com');
  whatsap.sendMessage('Hello', '+6289876543210');
  whatsap.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
  emai.sendMessage('Hello', 'john@doe.com');
  emai.sendDelayedMessage('Hello', 'john@doe.com', 3000);

// overriding

class Mailservice {
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
  
  }
  
  class WhatsAppservice extends Mailservice {
    constructor(sender, isBusiness) {
      super(sender);
      this.isBusiness = isBusiness;
    }
    
   
    // Overriding method
    sendMessage(message, receiver) {
      // memanggil method sendMessage pada superclass
      super.sendMessage(message, receiver);
  
      console.log('message sent via WhatsApp');
    }
  }
  
  
  const mailService = new Mailservice('someSender');
  const whatsappService = new WhatsAppservice('+6281234567890', true);
  
  mailService.sendMessage('Hai, apa kabar?', 'someReceiver');
  whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210');

//object composition

class Developer {
    constructor(name) {
      this.name = name;
    }
   
    commitChanges() {
      console.log(`${this.name} is committing changes...`);
    }
  }
   
  function canBuildUI(developer) {
    return {
      buildUI: () => {
        console.log(`${developer.name} is building UI...`);
      }
    }
  }
   
  function canBuildAPI(developer) {
    return {
      buildAPI: () => {
        console.log(`${developer.name} is building API...`);
      }
    }
  }
   
  function canDeployApp(developer) {
    return {
      deployApp: () => {
        console.log(`${developer.name} is deploying app...`);
      }
    }
  }
   
  function createFrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
  }
   
  function createBackEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
  }
   
  function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
  }
   
  function createFullStackDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
  }
   
  const frontEndDeveloper = createFrontEndDeveloper('Fulan');
  frontEndDeveloper.commitChanges();
  frontEndDeveloper.buildUI();
  console.log(`is ${frontEndDeveloper.name} developer? `, frontEndDeveloper instanceof Developer);
   
  const backEndDeveloper = createBackEndDeveloper('Fulana');
  backEndDeveloper.commitChanges();
  backEndDeveloper.buildAPI();
  console.log(`is ${backEndDeveloper.name} developer? `, backEndDeveloper instanceof Developer);
   
  const devOpsDeveloper = createDevOps('Fulani');
  devOpsDeveloper.commitChanges();
  devOpsDeveloper.deployApp();
  console.log(`is ${devOpsDeveloper.name} developer? `, devOpsDeveloper instanceof Developer);
   
  const fullStackDeveloper = createFullStackDeveloper('Fulanah');
  fullStackDeveloper.buildUI();
  fullStackDeveloper.buildAPI();
  fullStackDeveloper.deployApp();
  console.log(`is ${fullStackDeveloper.name} developer? `, fullStackDeveloper instanceof Developer);


class Animal{
    constructor(name,age,isMammal){
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class Rabbit extends Animal{
    constructor(name,age){
        super(name,age);
        this.isMammal = true;
    }
    eat(){
        return`${this.name} sedang makan!`
    }

   
}

class Eagle extends Animal{
    constructor(name,age){
        super(name,age);
        this.isMammal = false;
    }
    fly(){
        return`${this.name} sedang terbang!`
    }
}

const myRabbit = new Rabbit("Labi" , 2);
console.log(myRabbit.eat())
const myEagle = new Eagle("Elo" , 4);
console.log(myEagle.fly())


class Kafka{
    umur = 17

    constructor(nama,rombel){
        this.nama = nama;
        this.rombel = rombel
    }

    getName(){
        return`${this.name}`;
    }

    getEv(){
        console.log(`halo nama saya ${this.nama} dan saya ber umur ${this.umur} dan rombel ${this.rombel}`)
    }

    set setName(value){
        this.name = value;
    }
   
}

const cn = new Kafka("kafka","pplg")
cn.getEv()
cn.setName = 'arko';
console.log(cn.getName())