import request from 'superagent'

export function getFoundPets () {
    return request.get ('/api/found')
        .then(res => {
            return res.body
        })
}