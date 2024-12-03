import { Router } from 'express';
import {
  getCompras,
  createCompra,
  getCompraById,
  deleteCompra,
} from '../controllers/compraController.js';

const router = Router();

router.get('/', getCompras); // Obtener todas las compras
router.post('/', createCompra); // Crear una nueva compra
router.get('/:id', getCompraById); // Obtener una compra por ID
router.delete('/:id', deleteCompra); // Eliminar una compra por ID

export default router;
