import request from "superagent"

export function getAllLostApi () {
  return request
    .get('/api/lost')
    .then(response => {
      // console.log(response.body)
      return response.body
    })
}

export function addLostPetApi (lostPet) {
  return request
    .post('api/lost')
    .send(lostPet)
    .then(response => {
      return response.body.newId
    })
}

export function testFunct () {
  return 'hi'
}