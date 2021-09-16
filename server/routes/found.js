const express = require('express')

const db = require('../db/lostfound')

const router = express.Router()

router.get('/', (req, res) => {
    db.getAllFound().then(foundpets => {
        return res.json(foundpets)
    })
})

router.get('/:id', (req, res) => {
    db.getFoundById(req.params.id).then(foundpet => {
        return res.json(foundpet)
    })
})


router.post('/', (req, res) => {
    newFound = {}
    newFound.species = req.body.species
    newFound.photo = req.body.photo
    newFound.user_id = req.body.user_id

    db.addFound(newFound)
    .then(newFoundId => {
        newFound.id = newFoundId[0]
        res.json(newFound)
    })
})

router.delete('/:id')

module.exports = router