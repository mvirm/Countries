const {Country} = require('../../db')
const {Op} = require('sequelize');

const getCountriesByName = async (name) => {
    const filtered = await Country.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        }
    })
    if(!filtered.length) throw new Error('There are no countries that match the search');
    return filtered;
};

module.exports = {
    getCountriesByName
}