import pg from 'pg'
const pool = new pg.Pool({
    user: "postgres",
    password: "Dezluvme123",
    database: "blogpost",
    host: "localhost",
    port: 5432,
})


export default pool