import request from "superagent"

export function getAllLostApi () {
  request
    .get('/api/lost')
    .then(response => {
      return response.body
    })
}

export function addLostPetApi (lostPet) {
  request
    .post('api/lost')
    .send(lostPet)
    .then(response => {
      return response.body.newId
    })
}

export function testFunct () {
  return 'hi'
}