const db = require('../database/database')

const signup = async (params) => {
    await db.postSignupInfoToDb(params)
}

module.exports = {
    signup
}