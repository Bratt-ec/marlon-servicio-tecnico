import Producto from '../models/Producto.js';
import Categoria from '../models/Categoria.js';

export const getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll({
      include: { model: Categoria, as: 'Categoria' , attributes: ['nombre'] },
    });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos.', error });
  }
};

export const createProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock, categoria_id } = req.body;
    const nuevoProducto = await Producto.create({ nombre, descripcion, precio, stock, categoria_id });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el producto.', error });
  }
};

export const getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id, {
      include: { model: Categoria, attributes: ['nombre'] },
    });
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado.' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el producto.', error });
  }
};

export const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock, categoria_id } = req.body;
    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado.' });
    }
    Object.assign(producto, { nombre, descripcion, precio, stock, categoria_id });
    await producto.save();
    res.json(producto);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el producto.', error });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado.' });
    }
    await producto.destroy();
    res.json({ message: 'Producto eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto.', error });
  }
};
