
const jServer = require('json-server')
const server = jServer.create()
const router = jServer.router('db.json')
const middlewares = jServer.defaults()

const PORT = 8001

server.use(middlewares)
server.use('/api', router)
server.listen(PORT, () => {
  console.log(`JSON Server is running in http://localhost:${PORT}`)
})

