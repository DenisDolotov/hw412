import * as dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';
const Pool = pg.Pool;


const dbUser = process.env.DB_USER || 'postgres';
const dbPassword = process.env.DB_PASSWORD || 'password';
const dbHostname = process.env.DB_HOSTNAME || 'localhost';
const dbPort = process.env.DB_PORT || '5432';
const dbName = process.env.DB_NAME || 'random_user_db';



const pool = new Pool({
    user: dbUser,
    password: dbPassword,
    host: dbHostname,
    port: dbPort,
    database: dbName
})

export default pool;