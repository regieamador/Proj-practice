const os = require('os')

const user = os.userInfo()
console.log(user);

///Uptime in seconds
console.log(os.uptime());

const currrentOS = {
    name: os.type(),
    release : os.release()
}

console.log(currrentOS);