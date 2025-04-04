"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // importa el modulo
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send("hola mundo que t");
});
app.get('/lina', (req, res) => {
    res.send("hola tu");
});
app.get('/invernaderos', (req, res) => {
    const invernaderos = [
        { id: 1, nombre: 'Invernadero Norte' },
        { id: 2, nombre: 'Invernadero Sur' }
    ];
    res.json(invernaderos);
});
app.get('/invernaderos/:id/zonas', (req, res) => {
    const zonas = [
        { id: 1, nombre: 'Zona 1', cultivo: 'Tomates' },
        { id: 2, nombre: 'Zona 2', cultivo: 'Lechugas' }
    ];
    res.json(zonas);
});
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
//# sourceMappingURL=index.js.map