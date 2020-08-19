const db = require('../database/database')

const getPortfolio = async (params) => {
    await db.getPortfolioFromDb(params)
}

const addPortfolio = async (params) => {
    // console.log(params)
    await db.pushPortfolio(params)
}

const deleteFromPortfolio = () => {

}

module.exports = {
    getPortfolio,
    addPortfolio
}