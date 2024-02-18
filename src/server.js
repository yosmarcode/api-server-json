const jsonServer = require('json-server');
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults();
const cors = jsonServer.cors()

const PORT = 9000 | 3004

server.use('/api/v1', router)
server.use(middlewares);
server.use(cors)


server.listen(PORT, () =>{
    console.log(`Server in running in http://localhost:${PORT}`)
})