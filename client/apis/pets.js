import request from 'superagent'

export function getLostPets () {
    return request.get ('/api/v1/pets/lost')
        .then(res => {
            return res.body
        })
}

export function getFoundPets () {
    return request.get ('/api/v1/pets/found')
        .then(res => {
            return res.body
        })
}