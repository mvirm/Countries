const {Activity} = require('../../db');

// const [user, created] = await User.findOrCreate({
//     where: { username: 'sdepold' },

    const createActivity = async (name, difficulty, duration, season, countryId) => {
        const [activity, created] = await Activity.findOrCreate({
           where: {
            name,
            difficulty,
            duration,
            season
           } 
        })

        const cId = countryId.toUpperCase();
        await activity.addCountry(cId);

        return activity;
    }

// const createActivity = async (name, difficulty, duration, season, countryId) => {
//     const newActivity = await Activity.create({
//         name,
//         difficulty,
//         duration,
//         season
//     });

//     const cId = countryId.toUpperCase();
//     await newActivity.addCountry(cId);

//     return newActivity;
// };

module.exports = {
    createActivity
}