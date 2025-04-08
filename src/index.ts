import server from './controllers/server'
const port =  process.env.PORT || 5234; 

// Iniciar el servidor
server.listen(port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
       