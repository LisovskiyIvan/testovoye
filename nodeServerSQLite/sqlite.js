import sqlite3 from "sqlite3";

export class UsersDatabase {

    constructor() {
        this.db = new sqlite3.Database('users.db');
        this.init()
            .then(() => console.log('users database initialized'))
            .catch(console.error);
    };

    async getUsers() {
        const users = await new Promise((resolve, reject) => {
            this.db.all('SELECT * FROM users', function (err, row) {
                if (err) reject(err)
                else resolve(row)
            })
        })
        return users || "No users was found"
    }

    async getUserById(id) {
        const user = await new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM users WHERE id = ?`, [id], function (err, row) {
                if (err) reject(err)
                else resolve(row)
            })
        })
        return user || 'No user was found'
    }

    async addUser(user) {
        const lastID = await new Promise((resolve, reject) => {
            this.db.run('INSERT INTO users (name, age) VALUES (?, ?)', [user.name, user.age], function (err) {
                if (err) reject(err)
                else resolve(this.lastID)
            })
        })
        return { 'id': lastID, ...user }
    }

    async updateUser(user, id) {
        if (!user.name || !user.age) return 'Name and age are both required'
        const changes = await new Promise((resolve, reject) => {
            this.db.run('UPDATE users SET name = ?, age = ? WHERE id = ?', [user.name, user.age, id], function (err) {
                if (err) reject(err)
                else resolve(this.changes)
            })
        })
        return changes > 0 ? { 'id': id, ...user } : 'Oops, something went wrong'
    }

    async deleteUser(id) {
        const changes = await new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM users WHERE id = ?`, id, function (err) {
                if (err) reject(err)
                else resolve(this.changes)
            })
        })
        return changes > 0
    }

    async init() {
        return this.db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, age INTEGER NOT NULL)');
    }
}