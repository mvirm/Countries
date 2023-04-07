const {getCountryById} = require('../controllers/countries/getCountryById');
const {getAllCountries} = require('../controllers/countries/getAllCountries');
const {getCountriesByName} = require('../controllers/countries/getCountriesByName');

const getCountriesHandler = async (req, res) => {
    const {name} = req.query
    try {
       const country = name ? await getCountriesByName(name) : await getAllCountries();
       res.status(200).json(country) 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const getCountryHandler = async (req, res) => {
    const {id} = req.params;
    try {
        const country = await getCountryById(id);
        res.status(200).json(country); 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getCountriesHandler,
    getCountryHandler
}