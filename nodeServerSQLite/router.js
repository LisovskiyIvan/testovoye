import { userhandler } from './userhandler.js'


export function router(req, res) {
    const path = req.url
    if (path.startsWith('/user')) return userhandler(req, res)
    else {
        res.setHeader('Content-type', 'application/json')
        res.writeHead(404)
        res.end(`{There is such route as ${path}}`)
    }
}