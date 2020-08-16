const { DataSource } = require('apollo-datasource')

class PostsAPI extends DataSource {
  constructor({store}) {
    super()
    this.store = store
  }

  initialize(config) {
    this.context = config.context;
  }

  async createPost(args) {
    const posts = 
  }
}