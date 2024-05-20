
const u = require('./userhandler')
module.exports = {
    router: (req, res) => {
        const path = req.url
        if (path.startsWith('/user')) return u.userhandler(req, res)
        else {
            res.setHeader('Content-type', 'application/json')
            res.writeHead(404)
            res.end(`{There is such route as ${path}}`)
        }
    }
}