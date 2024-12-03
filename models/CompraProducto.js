import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Compra from './Compra.js';
import Producto from './Producto.js';

const CompraProducto = sequelize.define(
  'CompraProducto',
  {
    idCompra: {
      type: DataTypes.INTEGER,
      references: {
        model: Compra,
        key: 'idCompra',
      },
    },
    idProducto: {
      type: DataTypes.INTEGER,
      references: {
        model: Producto,
        key: 'idProducto',
      },
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'CompraProducto',
    schema: 'grupotc',
    timestamps: false,
  }
);

CompraProducto.belongsTo(Compra, { foreignKey: 'idCompra' });
CompraProducto.belongsTo(Producto, { foreignKey: 'idProducto' });

export default CompraProducto;
