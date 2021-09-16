import request from 'superagent'

export function getFoundPetsAPI () {
    return request.get ('/api/found')
        .then(res => {
            return res.body
        })
}

export function getFoundPetByIdAPI (foundID) {
    return request.get (`/api/found/${foundID}`)
        .then(res => {
            return res.body
        })
}

export function addFoundPetAPI (newFound) {
    return request.post ('/api/found')
        .send(newFound)
        .then(res => {
            return res.body
        })
        .catch(errorHandler('POST', '/api/found'))
}

export function delFoundPetAPI (foundID) {
    return request.del(`/api/found/${foundID}`)
    .then(res => res)
    .catch(errorHandler('DELETE', '/api/found/:id'))
}

export function updateFoundPetAPI (updateFound) {
    return request.patch(`/api/found/${updateFound.id}`)
    .send(updateFound)
    .then(res => {
        return res.body
    })
    .catch(errorHandler('PATCH', '/api/found/:id'))
}