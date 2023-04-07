const postActivityHandler = (req, res) => {
    const{name, difficulty, duration, season} = req.body;
    console.log(name);
    res.status(200).send(`NIY: creo una nueva actividad con los sig.datos: 
    name: ${name}, 
    difficulty: ${difficulty}, 
    duration: ${duration}, 
    season: ${season}`)
}; // ver que dificulty y season los trae undefined!!!

const getActivitiesHandler = (req, res) => {
    res.send('NIY: traigo tosas las actividades turisticas')
}

module.exports = {
    postActivityHandler,
    getActivitiesHandler
}