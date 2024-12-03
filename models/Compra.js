import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Cliente from './Cliente.js';
import MetodoPago from './MetodoPago.js';

const Compra = sequelize.define(
  'Compra',
  {
    idCompra: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Cliente,
        key: 'idCliente',
      },
    },
    fecha: {
      type: DataTypes.DATEONLY,
    },
    metodo_pago_id: {
      type: DataTypes.INTEGER,
      references: {
        model: MetodoPago,
        key: 'idmetodo',
      },
    },
  },
  {
    tableName: 'Compra',
    schema: 'grupotc',
    timestamps: false,
  }
);

Compra.belongsTo(Cliente, { foreignKey: 'cliente_id' });
Compra.belongsTo(MetodoPago, { foreignKey: 'metodo_pago_id' });

export default Compra;
