const {Activity} = require('../../db');

const getAllAcitivities = async () => await Activity.findAll();

module.exports = {
    getAllAcitivities
}