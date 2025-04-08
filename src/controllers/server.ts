import express from 'express';
import pool from '../config/db'; // Asegúrate de que el archivo db.ts está bien configurado

import colors from 'colors';

const app = express();
const port = 3000; // Puerto del servidor Express

app.use(express.json());

// Ruta para obtener datos de tb_persona


app.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM tbl_programacion_riego LIMIT 5;');
      
      console.log('🔍 Datos obtenidos:', result.rows); // Muestra los datos en la terminal
      res.json(result.rows);
      console.log(colors.green.bold('✅ Conexión exitosa a la BD'));
    } catch (err) {
      console.log(colors.red.bold('❌ Conexión fallida a la BD'));
      console.error('❌ Error en la consulta:', err);
      res.status(500).send('Error en la base de datos');
    }
  });


// Iniciar el servidor
app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
export default app;
