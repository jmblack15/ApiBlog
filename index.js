const express = require('express')
const { findAvailablePort } = require('./utils/freePort.js')

const app = express();
const desiredPort = process.env.PORT ?? 8080;

app.get('/', (req, res) => [
  res.send('my server')
])

app.get('/blogs', (req, res) => {
  res.json([
    {
      title: 'Backend With NodeJs',
      text: 'to create a server use Express',
    },
    {
      title: 'Frontend with React',
      text: 'to worrk with react use NextJs',
    },
  ])
})

app.get('/blogs/:id', (req, res) => {

  const { id } = req.params;

  res.json({
    id,
    title: 'Frontend with React',
    text: 'to worrk with react use NextJs',
  })
})


findAvailablePort(desiredPort).then(port => {
  app.listen(port, () => {
    console.log(`listen port in : http://localhost:${port}`)
  })
})

