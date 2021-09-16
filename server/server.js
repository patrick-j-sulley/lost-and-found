const express = require('express')
const path = require('path')

const authRoutes = require('./routes/auth')

const lostRoutes = require('./routes/lost')
const foundRoutes = require('./routes/found')

const server = express()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))

server.use('/api/v1', authRoutes)
server.use('/api/lost', lostRoutes)
server.use('/api/found', foundRoutes)

module.exports = server
