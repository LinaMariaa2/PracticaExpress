import express from 'express';
import pool from './config/db'; // Asegúrate de que el archivo db.ts está bien configurado

const app = express();
const port = 3000; // Puerto del servidor Express

app.use(express.json());

// Ruta para obtener datos de tb_persona


app.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM tbl_persona LIMIT 5;');
      console.log('🔍 Datos obtenidos:', result.rows); // Muestra los datos en la terminal
      res.json(result.rows);
    } catch (err) {
      console.error('❌ Error en la consulta:', err);
      res.status(500).send('Error en la base de datos');
    }
  });


// Iniciar el servidor
app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
