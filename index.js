const express = require('express');
const morgan = require('morgan');
const { findAvailablePort } = require('./utils/freePort.js')

const app = express();
const desiredPort = process.env.PORT ?? 8080;

app.use(express.text())
app.use(express.json())
app.use(morgan('dev'))


app.get('/blogs', (req, res) => {
  res.send('get blogs')
})

app.post('/blogs', (req, res) => {
  res.send('creat blog')
})

app.put('/blogs', (req, res) => {
  res.send('update blog')
})

app.patch('/blogs', (req, res) => {
  res.send('update blogs')
})

app.delete('/blogs', (req, res) => {
  res.send('delete blog')
})


findAvailablePort(desiredPort).then(port => {
  app.listen(port, () => {
    console.log(`listen port in : http://localhost:${port}`)
  })
})

