import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde .env

const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

pool.connect()
    .then(() => console.log('🔗 Conexión a PostgreSQL establecida'))
    .catch(err => console.error('❌ Error al conectar a PostgreSQL:', err));

export default pool;
