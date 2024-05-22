const d = require('./data');

module.exports = {
    userhandler: (req, res) => {
        const method = req.method
        const path = req.url.split('/')
        let body = ''

        res.setHeader('Content-type', 'application/json')

        if (path.length === 2 && method === 'GET') {
            res.writeHead(200)
            res.end(JSON.stringify(d.getUsers()))
        } else if (path.length === 2 && method === 'POST') {
            req.on('data', chunk => {
                body += chunk
                const parseBody = new URLSearchParams(body)
                const user = {
                    "name": parseBody.get('name'),
                    "age": parseInt(parseBody.get('age'))
                }
                res.writeHead(200)
                res.end(JSON.stringify(d.addUser(user)))
            })
        } else if (path.length === 3 && method === 'GET') { 
            res.writeHead(200)
            res.end(JSON.stringify(d.getUserById(parseInt(path[2]))))
        } else if (path.length === 3 && method === 'DELETE') {
            res.writeHead(200)
            res.end(JSON.stringify(d.deleteUser(parseInt(path[2]))))
        } else  if (path.length === 3 && method === 'PUT') {
            res.writeHead(200)
            req.on('data', chunk => {
                body += chunk
                const parseBody = new URLSearchParams(body)
                const user = {
                    "name": parseBody.get('name'),
                    "age": parseInt(parseBody.get('age'))
                }
                res.end(JSON.stringify(d.updateUser(user, parseInt(path[2]))))
            })
        } else {
            res.writeHead(404)
            res.end(`{There is such route as ${path.join('/')} and method ${method}}`)
        }
    }
}