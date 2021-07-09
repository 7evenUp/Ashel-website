const fs = require('fs')
const path = require('path')

const uploadImage = (createReadStream, filename) => {
  const url = path.join(process.cwd(), 'public', 'img', filename)
  const writeableStream = fs.createWriteStream(url)
  const readStream = createReadStream()

  readStream.pipe(writeableStream)
}

module.exports = uploadImage