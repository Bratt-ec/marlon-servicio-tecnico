import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Empleado = sequelize.define(
  'Empleado',
  {
    idEmpleado: {
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
    especialidad: {
      type: DataTypes.STRING(50),
    },
  },
  {
    tableName: 'Empleado',
    schema: 'grupotc',
    timestamps: false,
  }
);

export default Empleado;
