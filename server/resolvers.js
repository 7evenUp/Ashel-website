const resolvers = {
  Query: {
    admin: () => ({
      login: 'Artyom',
      password: '123'
    })
  }
}

module.exports = resolvers
