const PORT = 1337;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
     <head>
       <title>My site</title>
     </head>
     <body>
       <h1>Hello World</h1>
     </body>
    </html>
  `)
})

app.get('/puppies', (req, res) => {
  res.send(`
    <html>
     <head>
       <title>My site</title>
     </head>
     <body>
       <h1>Opps, they just ran away with food.</h1>
     </body>
    </html>
  `)
})

app.get('/kittens', (req, res) => {
  res.send(`
    <html>
     <head>
       <title>My site</title>
     </head>
     <body>
       <h1>We are hiding ... </h1>
     </body>
    </html>
  `)
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});
