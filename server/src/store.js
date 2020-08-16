const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
const { MONGODB_PASSWORD: password, MONGODB_DB_NAME: dbName } = process.env
const connectionString = `mongodb+srv://Artyom:${password}@myfirstcluster-ctiiw.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`

module.exports.createStore = async () => {
  let db

  if (!db) {
    try {
      const client = new MongoClient(connectionString, { useUnifiedTopology: true })
      if (!client.isConnected()) await client.connect()
      db = client.db(dbName)
      console.log('Подключились к БД!')
      console.log(db)
    }
    catch (err) {
      console.error(err)
    }
  }

  return { db }
}
  
  // mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true })

  // const db = mongoose.connection

  // db.once('open', () => console.log('Полдключился к БД!'))
  
  // const postSchema = new mongoose.Schema({
  //   // id: ID!
  //   heading: String,
  //   text: String,
  //   // created: Date!
  //   // updated: Date
  //   // photoUrl: String!
  // })

  // const Post = mongoose.model('Post', postSchema)

  // const jobPost = new Post({
  //   heading: 'Устроился на работу',
  //   text: 'blablalbalbalablbalblab'
  // })

  // jobPost.save((err, jobPost) => {
    
  // })

  // let db
  // console.log('Inside!')

  // client.connect(async err => {
    // if (err) throw new Error(err.message)

    // db = client.db(dbName)

    // const posts = db.collection('posts')
  
    // console.log('Подключились к БД!')
    // try {
    //   const { ops: result } = await db.collection('posts').findOne({c: 3})
    //   // if (error) throw new Error(error)
    //   console.log(result)
    // }
    // catch (err) {
    //   console.error(err)
    // }    
    
    // client.db('Ashel-website').collection('posts').deleteMany()

  // })
  // return { db }
// }