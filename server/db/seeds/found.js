exports.seed = knex =>
    knex('found').del()
        .then(() => 
            knex('found').insert([
                { id: 90000, species: 'dog', photo: 'https://static.vets-now.com/uploads/2017/06/my-dog-is-in-pain-320x212.jpg', user_id: 4 },
                { id: 90001, species: 'rabbit', photo: 'https://static.givealittle.co.nz/assets/hero/e5d4f064-ba06-4ddd-9fe1-abfd0157eaf1-800', user_id: 5 },
                { id: 90002, species: 'sheep', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUOJm7-fzSFEwoEQbohtmV6oJmJzERCn4iACPm7yyGBz3ZUH6q-hNkPsz0ZS4ux2DUN0&usqp=CAU', user_id: 6}
        ]))
