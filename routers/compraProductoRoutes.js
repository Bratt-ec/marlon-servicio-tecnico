import { Router } from 'express';
import {
  getCompraProductos,
  createCompraProducto,
  getCompraProductoById,
  deleteCompraProducto,
} from '../controllers/compraProductoController.js';

const router = Router();

router.get('/', getCompraProductos); // Obtener todos los registros de CompraProducto
router.post('/', createCompraProducto); // Crear un nuevo registro
router.get('/:idCompra/:idProducto', getCompraProductoById); // Obtener un registro por IDs
router.delete('/:idCompra/:idProducto', deleteCompraProducto); // Eliminar un registro

export default router;
