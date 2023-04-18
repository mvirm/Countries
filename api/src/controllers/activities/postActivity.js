const {Activity} = require('../../db');
const {Country} = require('../../db');
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

    // si en el multiple select del form los country id llegan como un array, agregar un map
        // countryId.map(id => {
        //     const cId = countryIdValidate(id);
        //     const country = await Country.findByPk(cId);
        //     if(!country) throw new Error(`Country with ID ${id} not found`)
        //     await activity.addCountry(cId);   
        // });
        // // y entonces ahi tendria que probar cambiar findOrCreate por Create

        const cId = countryIdValidate(countryId);
        const country = await Country.findByPk(cId);
        if(!country) throw new Error(`Country with ID ${countryId} not found`)
        await activity.addCountry(cId);

        return activity;
    }



module.exports = {
    createActivity
}