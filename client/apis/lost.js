import request from 'superagent'

export function getLostPetsAPI () {
    return request.get ('/api/lost')
        .then(res => {
            return res.body
        })
}

export function addLostPetAPI (newLost) {
    return request.post ('/api/lost')
        .send(newLost)
        .then(res => {
            return res.body
        })
        .catch(errorHandler('POST', '/api/lost'))
}