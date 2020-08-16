require('dotenv').config()
const { ApolloServer } = require('apollo-server')
const { MongoClient } = require('mongodb')
const { MONGODB_PASSWORD: password, MONGODB_DB_NAME: dbName } = process.env
const connectionString = `mongodb+srv://Artyom:${password}@myfirstcluster-ctiiw.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`

const { createStore } = require('./store')
const { schema } = require('./schema')

let db

const server = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const client = new MongoClient(connectionString, { useUnifiedTopology: true })
        if (!client.isConnected()) await client.connect()
        db = client.db(dbName)
        console.log('Подключились к БД!')
        // console.log(db)
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