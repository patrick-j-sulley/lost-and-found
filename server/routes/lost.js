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

router.delete('/:id', (req,res) => {
    db.removeLost(req.params.id)
    .then(removedPet => {
        res.json(removedPet)
    })
})

router.patch('/:id', (req, res) => {
    const id = req.params.id
    const updateLost = {}
    updateLost.name = req.body.name
    updateLost.species = req.body.species
    updateLost.photo = req.body.photo
    updateLost.user_id = req.body.user_id
    return db.updateLost(id, updateLost)
    .then(() => {
        return db.getLostById(id)
        .then(result => {
            var lostPet = result
            res.json(lostPet)
        })
    })
})

module.exports = router