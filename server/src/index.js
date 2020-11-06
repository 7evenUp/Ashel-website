require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const { MongoClient } = require('mongodb')
const { MONGO_DB_URI, MONGO_DB_DBNAME } = process.env
const { schema } = require('./schema')

let db

const server = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const client = new MongoClient(MONGO_DB_URI, { useUnifiedTopology: true })
        if (!client.isConnected()) await client.connect()
        db = client.db(MONGO_DB_DBNAME)
        console.log('Подключились к БД!')
      }
      catch (err) {
        console.error(err)
      }
    }
    
    return { db }
  },  
  engine: {
    reportSchema: true,
    variant: "current",
    graphVariant: "current"
  }
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})