import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde .env

// Verificación de variables de entorno necesarias
if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
  console.error('❌ Faltan variables de entorno. Asegúrate de que .env esté correctamente configurado.');
  process.exit(1); // Detener la ejecución si faltan las variables críticas
}

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

pool.connect()
    .then(() => console.log('🔗 Conexión a PostgreSQL establecida'))
    .catch(err => {
        console.error('❌ Error al conectar a PostgreSQL:', err);
        process.exit(1); // Detener el proceso en caso de error en la conexión
    });
    

export default pool;

