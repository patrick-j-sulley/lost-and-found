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

    return db.addFound(newFound)
        .then((newFoundId) => {
            return db.getFoundById(newFoundId[0])
                .then((result) => {
                    var newPet = result
                    res.json(newPet)
                })
        })
})

router.delete('/:id', (req, res) => {
    db.removeFound(req.params.id)
        .then(removedPet => {
            res.json(removedPet)
        })
})

router.patch('/:id', (req, res) => {
    const id = req.params.id
    const updateFound = {}
    updateFound.species = req.body.species
    updateFound.photo = req.body.photo
    updateFound.user_id = req.body.user_id
    return db.updateFound(id, updateFound)
        .then(() => {
            return db.getFoundById(id)
                .then(result => {
                    var foundPet = result
                    res.json(foundPet)
                })
        })
})

module.exports = router