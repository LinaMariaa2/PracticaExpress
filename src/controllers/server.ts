import express from 'express';
import pool from '../config/db'; // Asegúrate de que el archivo db.ts está bien configurado
import router from '../routes/router'
import supabase from '../supabase'


const app = express();
const port = 3000; // Puerto del servidor Express

app.use(express.json());

// Ruta para obtener datos de tb_persona


app.get('/', async (req, res) => {
    try {
      const {data, error} = await supabase.from('tbl_persona').select('*').limit(2);
      if(error) throw error;
      console.log('🔍 Datos obtenidos:', data); // Muestra los datos en la terminal
      res.json(data);
      
    } catch (err) {
      console.error('❌ Error en la consulta:', err);
      res.status(500).send('Error en la base de datos');
    }
  });


// Iniciar el servidor
app.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
export default app;