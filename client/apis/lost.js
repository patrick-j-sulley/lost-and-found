import request from 'superagent'

export function getLostPetsAPI () {
    return request.get ('/api/lost')
        .then(res => {
            return res.body
        })
}