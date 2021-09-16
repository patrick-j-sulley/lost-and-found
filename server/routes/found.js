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
    .then(newFound => {
        res.json(newFound)

        // WIP - return found pet by id after adding new found pet
        // db.getFoundById(newFound)
        // .then(getNewFound => {
        //     res.json(getNewFound)
        // })

    })
})

module.exports = router