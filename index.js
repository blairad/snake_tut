const express = require('express')
//require is a way of loading modules which pulls in express module
const app = express()
//instantiate express and assign to app
const port = 3000
// set the port for listening to later on
app.get('/', (req, res) => res.send('Hello World!'))
// set up a route for out root (/) and if someone goes to our server we'll send back hello world
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// tell express to listen on port 3000 which will say server is started and we're listening on this port