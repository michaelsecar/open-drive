
import fs from 'fs'

export const getFiles = async (path) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if(err){
        reject(err)
      }
      else{
        resolve(files)
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