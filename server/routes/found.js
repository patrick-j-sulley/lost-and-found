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

// WIP
router.post('/', (req, res) => {
    // db functions required
    // db.addLostPet().then(lostPets => {
    //     return res.json(lostPets)
    // })
})

module.exports = router