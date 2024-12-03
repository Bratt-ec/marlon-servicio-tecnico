import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const MetodoPago = sequelize.define(
  'MetodoPago',
  {
    idmetodo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: 'metodopago',
    schema: 'grupotc',
    timestamps: false,
  }
);

export default MetodoPago;
