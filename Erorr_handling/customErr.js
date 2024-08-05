// class ValidationError extends Error {
//     constructor(message) {
//       super(message);
//         this.name = "ValidationError";
//     }
//   }

// const validateNumberInput = (num1,num2,num3) => {
//     if(typeof num1!== 'number'){
//         throw new ValidationError('Argumen pertama harus number')
//     }else if(typeof num2!== 'number'){
//         throw new ValidationError('Argumen kedua harus number');
//     }else if(typeof num3!== 'number'){
//         throw new ValidationError('Argumen ketiga harus number')
//     }
// }
// // TODO 3:
// // * - Panggil fungsi validateNumberInput di dalam fungsi detectTriangle untuk memvalidasi nilai argumen a, b, dan c.
// // *   - pastikan Anda memanggil validateNumberInput menggunakan try .. catch.
// // *   - bila block catch terpanggil, kembalikan fungsi detectTriangle dengan pesan error yang dibawa fungsi validateNumberInput.
// // */

// try{
// validateNumberInput(num1,num2,num3)
// }catch(error){

// }
// // function validateNumberInput(num1,num2,num3){

// // }

class ValidationError extends Error {
    constructor(message) {
      super(message);
        this.name = "ValidationError";
    }
  }
// TODO 2
const validateNumberInput = (a,b,c) => {
    if(typeof a!== 'number'){
        throw new ValidationError('Argumen pertama harus number')
    }else if(typeof b!== 'number'){
        throw new ValidationError('Argumen kedua harus number');
    }else if(typeof c!== 'number'){
        throw new ValidationError('Argumen ketiga harus number')
    }
}
const detectTriangle = (a, b, c) => {
  // TODO 3
try{
	validateNumberInput(a,b,c)
  
  
  if (a === b && b === c) {
    return 'Segitiga sama sisi';
  }

  if (a === b || a === c || b === c) {
    return 'Segitiga sama kaki';
  }

  return 'Segitiga sembarang';
}
  catch(error){
	return error.message
  }
};
  