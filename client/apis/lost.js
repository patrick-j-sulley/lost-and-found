import request from 'superagent'

export function getLostPets () {
    return request.get ('/api/lost')
        .then(res => {
            return res.body
        })
}