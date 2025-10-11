
import fs from 'fs'

export const getFiles = async (path) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if(err){
        reject(err)
      }
      else{
        const _files = files.map((file) => {
          return {
            name: file,
            type: fs.statSync(path + '/' + file).isDirectory() ? 'directorio' : 'archivo',
            size: fs.statSync(path + '/' + file).size,
            uploadDate: fs.statSync(path + '/' + file).mtime.toLocaleDateString()
          }
        })
        resolve(_files)
      }
    })
  })
}

export const getFile = async (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if(err){
        reject(err)
      }
      else{
        resolve(data)
      }
    })
  })
}