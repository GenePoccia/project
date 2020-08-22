const db = require('../database/database')

const signup = async (params) => {
    await db.postSignupInfoToDb(params)
}

const login = async (params) => {
    await db.login(params)
}

module.exports = {
    signup,
    login
}