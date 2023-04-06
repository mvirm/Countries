const {Router} = require('express');

const countriesRouter = Router();

countriesRouter.get('/', (req, res) => {
    res.status(200).send('NIY: obtengo todos los paises || filtro por nombre')
})

countriesRouter.get('/:id', (req, res) => {
    res.status(200).send('NIY: detalle de un pais solicitado por ID, debe incluidas las actividades turisticas asociadas')
})
module.exports = {
    countriesRouter
}
