const http = require('http')
const os = require('os')
const port = 8080
const ip = '0.0.0.0'

const server = http.createServer((req, res) => {
  console.log('Recebendo uma request!')
  res.end(`<h1>Servico rodando em ${os.hostname}</h1>`)
})

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})
//teste
