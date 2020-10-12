
exports.seed = function(knex) {
  const users = [
    {
      username: 'He', password: '12345'
    },
    {
      username: 'Man', password: '4356'
    },
    {
      username: 'Dead', password: '72435'
    },
  ]
  return knex('users').insert(users)
  };
  