exports.seed = knex =>
    knex('lost').del()
        .then(() => 
            knex('lost').insert([
                { id: 1000, name: 'Steve', species: 'chipmunk', photo: 'https://i.redd.it/p8bplj0w2j131.jpg', user_id: 1 },
                { id: 1001, name: 'Marvin', species: 'dog', photo: 'https://i.imgur.com/KAh9NOq.jpeg', user_id: 2 },
                { id: 1002, name: 'Isabelle', species: 'cat', photo: 'https://i.imgflip.com/5110mw.png', user_id: 3}
        ]))
