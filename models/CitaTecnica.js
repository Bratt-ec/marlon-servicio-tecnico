import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Cliente from './Cliente.js';
import Empleado from './Empleado.js';

const CitaTecnica = sequelize.define(
  'CitaTecnica',
  {
    idCita: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idEmpleado: {
      type: DataTypes.INTEGER,
      references: {
        model: Empleado,
        key: 'idEmpleado',
      },
    },
    idCliente: {
      type: DataTypes.INTEGER,
      references: {
        model: Cliente,
        key: 'idCliente',
      },
    },
    fecha: {
      type: DataTypes.DATEONLY,
    },
    descripcion: {
      type: DataTypes.STRING(255),
    },
  },
  {
    tableName: 'CitaTecnica',
    schema: 'grupotc',
    timestamps: false,
  }
);

CitaTecnica.belongsTo(Empleado, { foreignKey: 'idEmpleado' });
CitaTecnica.belongsTo(Cliente, { foreignKey: 'idCliente' });

export default CitaTecnica;
