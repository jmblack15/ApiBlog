const express = require('express');
const morgan = require('morgan');
const { findAvailablePort } = require('./utils/freePort.js')

const app = express();
const desiredPort = process.env.PORT ?? 8080;
const blogs = [
  {
    id: 1,
    title: 'learn NodeJs',
    content: 'lerning backend with Nodejs and Express',
    tags: ['NodeJs'],
    author: 'Jose Manuel Osorio',
  }
]

app.use(express.text())
app.use(express.json())
app.use(morgan('dev'))


app.get('/blogs', (req, res) => {
  res.json(blogs)
})

app.post('/blogs', (req, res) => {
  const newBlog = {
    ...req.body,
    id: blogs[blogs.length - 1].id + 1
  }
  blogs.push(newBlog)
  res.status(201).json({
    status: 'created',
    item: newBlog,
    errors: []
  })
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

app.get('/blogs/:id', (req, res) => {
  const blogID = blogs.find((blog) => blog.id === parseInt(req.params.id))

  if (!blogID) return res.status(404).json({
    status: 'not Found',
    errors: ['item no found']
  })

  res.status(200).json(blogID)

})


findAvailablePort(desiredPort).then(port => {
  app.listen(port, () => {
    console.log(`listen port in : http://localhost:${port}`)
  })
})

