const {Activity} = require('../../db');


    const createActivity = async (name, difficulty, duration, season, countryId) => {

        const [activity, created] = await Activity.findOrCreate({
            where: {
                name, 
                difficulty,
                duration,
                season,    
            }
        })
            
        await activity.addCountry(countryId);   

        return activity;
    }



module.exports = {
    createActivity
}