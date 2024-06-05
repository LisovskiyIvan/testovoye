import { Router } from "express";
import { db } from "./db";

export const userRouts = Router()



userRouts.get('/users', async (req, res) => {
    res.setHeader('Content-type', 'application/json')
    res.writeHead(200)
    res.end(JSON.stringify(await db.getUsers()))
})

userRouts.post('/users', async (req, res) => {
    res.setHeader('Content-type', 'application/json')
    const user = {
        "name": req.body.name,
        "age": parseInt(req.body.age)
    }
    res.writeHead(200)
    if (!user.name || !user.age) res.end('Name and age are both required') 
    else res.end(JSON.stringify(await db.addUser(user)))
})


userRouts.get('/users/:id', async (req, res) => {
    res.setHeader('Content-type', 'application/json')
    const id = parseInt(req.params.id)
    res.writeHead(200)
    res.end(JSON.stringify(await db.getUserById(id)))
})

userRouts.delete('/users/:id', async (req, res) => {
    res.setHeader('Content-type', 'application/json')
    const id = parseInt(req.params.id)
    res.writeHead(200)
    res.end(JSON.stringify(await db.deleteUser(id)))
})

userRouts.put('/users/:id', async (req, res) => {
    res.setHeader('Content-type', 'application/json')
    const id = parseInt(req.params.id)
    const user = {
        "name": req.body.name,
        "age": parseInt(req.body.age)
    }
    res.writeHead(200)
    if (!user.name || !user.age) res.end('Name and age are both required') 
        else res.end(JSON.stringify(await db.updateUser(id, user)))
})
