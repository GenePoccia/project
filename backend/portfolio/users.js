const db = require('../database/database')

const signup = async (params) => {
    console.log('here')
    let usernameExists = await db.postSignupInfoToDb(params)
    
    
    console.log(usernameExists)
}

module.exports = {
    signup
}