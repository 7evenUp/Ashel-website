const fs = require('fs')
const path = require('path')

const upload = (createReadStream, filename) => {
  const writeableStream = fs.createWriteStream(path.join(process.cwd(), 'img', filename))
  const readStream = createReadStream()

  readStream.pipe(writeableStream)
}

module.exports = upload