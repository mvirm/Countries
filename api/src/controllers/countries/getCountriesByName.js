const {Country} = require('../../db')
const {Op} = require('sequelize');

const getCountriesByName = async (name) => {
    return await Country.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        }
    })
};

module.exports = {
    getCountriesByName
}