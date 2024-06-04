import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
    host: process.env.HOST,
    port: process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB
})

export class DB {

    constructor() {
        this.pool = new Pool({
            host: process.env.HOST,
            port: process.env.DB_PORT,
            user:process.env.DB_USER,
            password:process.env.DB_PASSWORD,
            database: process.env.DB
        })
        ;
        this.init()
            .then(() => console.log('testdb database initialized'))
            .catch(console.error);
    };

    async getUsers() {
        return (await this.pool.query('SELECT * FROM testdb')).rows
    }

    async getUserById(id) {
        return (await this.pool.query('SELECT * FROM testdb WHERE id = $1', [id])).rows
    }

    async addUser(user) {
        if (!user.name || !user.age) return 'No data provided'
        return (await this.pool.query('INSERT INTO testdb (name, age) VALUES ($1, $2)', [user.name, user.age])).rowCount !== 0 ? true : false
    }

    async deleteUser(id) {
        return (await this.pool.query('DELETE FROM testdb WHERE id = $1', [id])).rowCount !== 0 ? true : false
    }

    async updateUser(id, user) {
        if (!user.name || !user.age) return 'Name and age are both required'
        return (await this.pool.query('UPDATE testdb SET name = $1, age = $2 WHERE id = $3', [user.name, user.age, id])).rowCount !== 0 ? true : false
    }

    async init() {
        return this.pool.query('CREATE TABLE IF NOT EXISTS testdb(id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL, age INTEGER NOT NULL)');
    }

}


export default pool