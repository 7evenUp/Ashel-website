const fs = require('fs')
const path = require('path')

const uploadImage = (createReadStream, filename) => {
  console.log(path.join(process.cwd(), 'public', 'img', filename))
  const writeableStream = fs.createWriteStream(path.join(process.cwd(), 'public', 'img', filename))
  const readStream = createReadStream()

  readStream.pipe(writeableStream)
}

module.exports = uploadImage