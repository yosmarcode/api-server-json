
const jServer = require('json-server')
const server = jServer.create()
const router = jServer.router('db.json')
const middlewares = jServer.defaults()

const PORT = 8001

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://app-agenda-ts.vercel.app/'); // Allow any origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


server.use(middlewares)
server.use('/api', router)
server.listen(PORT, () => {
  console.log(`JSON Server is running in http://localhost:${PORT}`)
})

