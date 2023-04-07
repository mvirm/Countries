const {Country, Activity} = require('../../db');

const getCountryById = async (id) => {
    const countryId = id.toUpperCase();
    return await Country.findByPk(countryId, 
        {include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season']
        }
    });
};

module.exports = {
    getCountryById
}