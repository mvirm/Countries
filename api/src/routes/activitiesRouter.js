const {Router} = require('express');

const activitiesRouter = Router();

activitiesRouter.post('/', (req, res) => {
    res.status(200).send('NIY: creo una nueva actividad')
})

activitiesRouter.get('/', (req, res) => {
    res.status(200).send('NIY: traigo tosas las actividades turisticas')
})

module.exports = {
    activitiesRouter
}