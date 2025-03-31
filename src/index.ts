import express from 'express';
import pool from './config/db'; // Importamos la conexión

const app = express();
const port = process.env.PORT || 3000;

app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ success: true, time: result.rows[0] });
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
});

app.listen(port, () => {
    console.log(`✅ Servidor escuchando en el puerto ${port}`);
});
