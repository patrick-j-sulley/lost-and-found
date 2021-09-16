const express = require('express')

// db.js required
// const db = require('../db/found')

const router = express.Router()

router.get('/', (req, res) => {
    // db functions required
    // db.getLostPets().then(lostPets => {
    //     return res.json(lostPets)
    // })
})

router.post('/', (req, res) => {
    // db functions required
    // db.addLostPet().then(lostPets => {
    //     return res.json(lostPets)
    // })
})

module.exports = router