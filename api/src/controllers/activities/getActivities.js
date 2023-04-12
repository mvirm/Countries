const {Activity, Country} = require('../../db');

const getAllActivities = async () => {
    const filterd = await Activity.findAll(
        {include: {
            model: Country,
            attributes: ['name']
         }
        }
    );
    if(!filterd.length) throw new Error('There are no Tourist Activities to show');
    return filterd
}
module.exports = {
    getAllActivities
}