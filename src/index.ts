import express from 'express'; // importa el modulo
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("hola mundo que t");
});

app.get('/lina', (req, res) => {
    res.send("hola tu");
});

app.listen(port, () =>{
    console.log(`Servidor escuchando en el puerto ${port}`)
});