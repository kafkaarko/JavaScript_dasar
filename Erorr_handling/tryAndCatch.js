// try {
//     console.log("Awal blok try");
//     console.log("Akhir blok try");
//   } catch (error) {
//     console.log("Tidak terjadi eror, maka kode ini diabaikan");
//   }

// try {
//     console.log("Awal block try");
//     errorCode;
//     console.log("Akhirnya blok try");
// }catch(error){
//     console.log("Terjadinya erorr")
// }

// try {
//     console.log("Awal blok try");   // (1)
//     errorCode;                      // (2)
//     console.log("Akhir blok try");  // (3)
//   } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
//   }

  try {
    console.log("Awal blok try");
    errorCode;
    console.log("Akhir blok try");
  } catch (error) {
    console.log("Baris ini diabaikan");
  } finally {
    console.log("Akan tetap dieksekusi");
  }