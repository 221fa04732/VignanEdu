const zod = require('zod')

const user = {
    name :  zod.string(),
    email : zod.string().email(),
    password : zod.string().min(8)
}

module.exports = {
    Uname : user.name,
    Uemail : user.email,
    Upassword : user.password
}