import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Categoria from './Categoria.js';

const Producto = sequelize.define(
  'Producto',
  {
    idProducto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING(255),
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Categoria,
        key: 'idCategoria',
      },
    },
  },
  {
    tableName: 'Producto',
    schema: 'grupotc',
    timestamps: false,
  }
);

// Asociación con Categoria
Producto.belongsTo(Categoria, { foreignKey: 'categoria_id', as: 'Categoria' });

export default Producto;
