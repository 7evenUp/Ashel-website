const fs = require('fs')
const path = require('path')

const uploadImage = (createReadStream, filename, folder) => {
  
  const index = filename.lastIndexOf('.')
  filename = filename.slice(0, index) + new Date().getTime() + filename.slice(index)
  const url = path.join(process.cwd(), 'public', 'img', folder, filename)
  const writeableStream = fs.createWriteStream(url)
  const readStream = createReadStream()

  readStream.pipe(writeableStream)
}

module.exports = uploadImage