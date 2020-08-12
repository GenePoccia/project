const db = require('../database/database')

const getPortfolio = async (params) => {
    await db.getPortfolioFromDb(params)
}

const addToPortfolio = () => {

}

const deleteFromPortfolio = () => {

}

module.exports = {
    getPortfolio
}