require('dotenv').config()
const express = require('express')
const path = require('path')
const { ApolloServer } = require('apollo-server-express')
const { MongoClient } = require('mongodb')
const { MONGO_DB_URI, MONGO_DB_DBNAME } = process.env
const { schema } = require('./schema')

let db

const databaseConnect = async () => {
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
}

databaseConnect()

const app = express()
const server = new ApolloServer({
  schema,
  context: async ({req}) => ({ db }),  
  // engine: {
  //   reportSchema: true,
  //   variant: "current",
  //   graphVariant: "current"
  // }
})

server.applyMiddleware({app})

app.use('/static', express.static(path.join(__dirname, '..', 'public')));

app.use((req, res) => {
  res.status(200);
  res.send('Hello!');
  res.end();
})

app.listen(4000, () => {console.log(`server ready at localhost:4000${server.graphqlPath}`)});