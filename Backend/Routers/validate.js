const zod = require('zod')

const studentval = {
    name :  zod.string(),
    email : zod.string().email(),
    password : zod.string().min(8)
}

const facultyval = {
    empid :  zod.string(),
    email : zod.string().email(),
    password : zod.string().min(8)
}

const adminval = {
    email : zod.string().email(),
    password : zod.string().min(8),
    secrete : zod.string(),
    otp : zod.string()
}

module.exports = {
    studentval : studentval,
    facultyval : facultyval,
    adminval : adminval
}