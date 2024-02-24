const bcrypt = require('bcrypt')


const hashPassword = (password) =>{
    const saltRounds = 10;
    let hashedPassword = bcrypt.hash(password, saltRounds)
    return hashedPassword
}

const comparePassword = (password,hashedPassword) =>{
    return bcrypt.compare(password, hashedPassword)
}

module.exports = {hashPassword, comparePassword}



