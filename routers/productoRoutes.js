import { Router } from 'express';
import {
  getProductos,
  createProducto,
  getProductoById,
  updateProducto,
  deleteProducto,
} from '../controllers/productoController.js';

const router = Router();

router.get('/', getProductos); // Obtener todos los productos
router.post('/', createProducto); // Crear un nuevo producto
router.get('/:id', getProductoById); // Obtener un producto por ID
router.put('/:id', updateProducto); // Actualizar un producto por ID
router.delete('/:id', deleteProducto); // Eliminar un producto por ID

export default router;
