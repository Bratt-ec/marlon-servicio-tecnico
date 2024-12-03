import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Ciudad = sequelize.define(
  'Ciudad',
  {
    idciudad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: 'Ciudad',
    schema: 'grupotc',
    timestamps: false,
  }
);

export default Ciudad;
