const {Activity} = require('../../db');

const getAllActivities = async () => {
    const filterd = await Activity.findAll();
    if(!filterd.length) throw new Error('There are no Tourist Activities to show');
    return filterd
}
module.exports = {
    getAllActivities
}