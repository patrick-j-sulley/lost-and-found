import request from 'superagent'

export function getFoundPetsAPI () {
    return request.get ('/api/found')
        .then(res => {
            return res.body
        })
}