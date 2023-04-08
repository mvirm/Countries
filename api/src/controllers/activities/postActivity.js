const {Activity} = require('../../db');
const {countryIdValidate} = require('../../validations/countryIdValidate');

    const createActivity = async (name, difficulty, duration, season, countryId) => {

        const [activity, created] = await Activity.findOrCreate({
           where: {
            name,
            difficulty,
            duration,
            season
           } 
        })

        const cId = countryIdValidate(countryId);
        await activity.addCountry(cId);

        return activity;
    }



module.exports = {
    createActivity
}