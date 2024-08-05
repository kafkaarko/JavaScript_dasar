const json = '{ "name" : "kafka","age" : 20}';
// const json = '{bad json}'

try{
    const user = JSON.parse(json)

    if(!user.name){
        throw new SyntaxError("'name' is required")
    }
    errorCode;
    console.log(user.name);
    console.log(user.age);
}catch(error){
    // console.log(Error.name);
    // console.log(Error.message);
    // console.log(`JSON Error: ${error.message}`);
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
      } else if (error instanceof ReferenceError) {
        console.log(error.message);
      } else {
        console.log(error.stack);
      }
}

// Untuk mengatasinya, kita bisa menggunakan throw. Operator ini akan “melemparkan” eror pada program, sehingga eksekusi kode akan masuk pada blok catch. Berikut ini adalah contoh mengimplementasikan throw untuk menimbulkan eror kita sendiri: