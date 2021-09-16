const express = require('express')

const db = require('../db/lostfound')

const router = express.Router()

router.get('/', (req, res) => {
    db.getAllLost().then(lostPets => {
        return res.json(lostPets)
    })
})

router.get('/:id', (req, res) => {
    db.getLostById(req.params.id).then(lostpet => {
        return res.json(lostpet)
    })
})

router.post('/', (req, res) => {
    newLost = {}
    newLost.name = req.body.name
    newLost.species = req.body.species
    newLost.photo = req.body.photo
    newLost.user_id = req.body.user_id

    db.addLost(newLost)
    .then(newLostId => {
        newLost.id = newLostId[0]
        res.json(newLost)
    })
})

module.exports = router