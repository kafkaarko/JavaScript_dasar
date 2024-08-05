// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.race([promise1, promise2, promise3])
//   .then((value) => console.log(value));

/**Pada contoh kode di atas, kita membuat tiga Promise yang masing-masing membutuhkan waktu selesai berbeda-beda. Kemudian, kita menggunakan Promise.race() untuk mengeksekusi ketiganya secara paralel. Ingat! Promise.race() hanya mengembalikan nilai Promise yang prosesnya paling cepat. Jadi, ia hanya mengembalikan nilai dari promise1.

Lalu, bagaimana jika salah satu Promise ada yang rejected? Jika proses rejection merupakan proses yang paling cepat, ia akan mengembalikan rejection tersebut. Jika rejection tidak kalah cepat dengan proses lain yang nilainya fulfilled, ia akan tetap mengembalikan nilai resolved tercepat. */

const promise1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promise1, promise2, promise3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));    