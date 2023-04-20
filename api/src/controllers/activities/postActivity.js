const {Activity} = require('../../db');
const {Country} = require('../../db');
const {countryIdValidate} = require('../../validations/countryIdValidate');

    const createActivity = async (name, difficulty, duration, season, countryId) => {

        const activity  = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
            
        await activity.addCountry(countryId);   

        return activity;
    }



module.exports = {
    createActivity
}