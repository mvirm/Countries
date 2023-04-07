const {Country, Activity} = require('../../db');

const getCountryById = async (id) => {
    return await Country.findByPk(id, 
        {include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season']
        }
    });
};

module.exports = {
    getCountryById
}