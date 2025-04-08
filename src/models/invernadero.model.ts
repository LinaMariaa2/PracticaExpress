import { DataTypes } from 'sequelize';
import sequelize from '../config/db';

const Invernadero = sequelize.define('Invernaderos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  fecha_creacion: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },

  estado: {
    type: DataTypes.ENUM('activo', 'inactivo', 'mantenimiento'), 
    allowNull: false,
  },

  responsable: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'tbl_invernaderos', 
});

export default Invernadero;
