import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Cliente = sequelize.define(
  'Cliente',
  {
    idCliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cedula: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(255),
    },
    telefono: {
      type: DataTypes.STRING(20),
    },
    email: {
      type: DataTypes.STRING(100),
    },
    fechaNac: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    ciudad_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Ciudad',
        key: 'idciudad',
      },
    },
  },
  {
    tableName: 'Cliente',
    schema: 'grupotc',
    timestamps: false,
  }
);

export default Cliente;
