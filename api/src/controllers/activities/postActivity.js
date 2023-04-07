const {Activity} = require('../../db');

const createActivity = async (name, difficulty, duration, season, countryId) => {
    const newActivity = await Activity.create({
        name, 
        difficulty,
        duration,
        season
    });
//ver como llega difficulty y season ==> undefined?
    await newActivity.addCountry(countryId);

    return newActivity;
};

module.exports = {
    createActivity
}