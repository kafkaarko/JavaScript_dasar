// function getUsers(isOffline, callback) {
//     // simulate network delay
//     setTimeout(() => {
//       const users = ['John', 'Jack', 'Abigail'];
    
//       if (isOffline) {
//         callback(new Error('cannot retrieve users due offline'), null);
//         return;
//       }
   
   
//       callback(null, users);
//     }, 3000);
//   }

//callback yang sebelumnya kita buat pendekatan menggunakan promise

function getUsers(isOffline) {
    // return a Promise object
    return new Promise((resolve, reject) => {
   
      // simulate network delay
      setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];
      
        if (isOffline) {
          reject(new Error('cannot retrieve users due offline'));
          return;
        }
   
        resolve(users);
      }, 3000);
    
    });
  }

  getUsers(true)
  .then(users => console.log(users))
  .catch(err => console.log(err.message));

  getUsers(false)
  .then(users => console.log(users))
  .catch(err => console.log(err.message));