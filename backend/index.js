
import express from 'express'
import multer from 'multer'
import { getFiles, getFile } from './api/os_service.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.static('public'))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

app.get('/list', (req, res) => {
    const files = getFiles('public')
    files.then((files) => {
      res.send(files)
    })
    .catch((err) => {
      res.send(err)
    })
})

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file)
  if(req.file){
    res.send('ok')
  }
  else{
    res.send('No se ha podido subir el archivo')
  }
})

app.get('/download/:file', (req, res) => {
  const file = getFile(`public/${req.params.file}`)
  file.then((file) => {
    res.send(file)
  })
  .catch((err) => {
    res.send(err)
  })
})
    
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
