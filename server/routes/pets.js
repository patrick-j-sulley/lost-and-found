const express = require('express')

// db.js required
// const db = require('../db/pets')

const router = express.Router()

router.get('/lost', (req, res) => {
    // db functions required
    // db.getLostPets().then(lostPets => {
    //     return res.json(lostPets)
    // })
})

router.get('/found', (req, res) => {
    // db functions required
    // db.getFoundPets().then(foundPets => {
    //     return res.json(foundPets)
    // })
})

module.exports = router