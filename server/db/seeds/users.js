const { generateHash } = require('authenticare/server')


exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(
        [
          {
            id: 1,
            username: 'admin',
            password: 'Krang',
            email_address: 'hello@devacademy.co.nz',
            contact_details: 'Ring the bell ;)',
          },
          {
            id: 2,
            username: 'Jacob',
            password: 'chewbacca',
            email_address: 'JJ@devacademy.co.nz',
            contact_details: 'Find me at the waterfall',
          },
          {
            id: 3,
            username: 'Winston',
            password: 'Krampus',
            email_address: 'wiggle@devacademy.co.nz',
            contact_details: '02102239921',
          },
          {
            id: 4,
            username: 'Jasmine',
            password: 'appletree',
            email_address: 'jblossom@devacademy.co.nz',
            contact_details: 'sing africa by toto and I will appear',
          },
          {
            id: 5,
            username: 'Duffman',
            password: 'Duffman',
            email_address: 'Duffman@devacademy.co.nz',
            contact_details: 'Duffman',
          },
          {
            id: 6,
            username: 'Zana',
            password: 'lithuanianumber1',
            email_address: 'orb@devacademy.co.nz',
            contact_details: 'email only',
          }      
        ].map(user => {
          return generateHash(user.password)
            .then(hash => {
              user.hash = hash
              delete user.password
              return user
            })
        }))
        .then(users => {
          return knex('users').insert(users)
        })
    })
}
