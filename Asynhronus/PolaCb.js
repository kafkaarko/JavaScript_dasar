//Callback
// function getUsers(callback){
//     setTimeout(() =>{
//         const users = ['Jhon','Jack','kafka'];
//         callback(users)
//     },3000)
// }

// function userCallback(users){
//     console.log(users)
// }


//ini akan bermasalah jika pengguna tb tb jaringan offline

function getUsers(isOffline , callback){
    setTimeout(() =>{
        const users = ['Jhon','Jack','kafka'];

        if(isOffline){
            callback(new Error('cannot retieve users due offline'),null);
            return;
        }
        callback(null,users)
    },3000)
}

function userCallback(error,users){
    if(error){
        console.log('proced failed: ',error.message);
        return;
    }
    console.log('proces succes:',users)
}

getUsers(false,userCallback);
getUsers(true,userCallback);
