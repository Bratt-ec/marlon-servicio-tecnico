import { Router } from 'express';
import {
  getMetodosPago,
  createMetodoPago,
  getMetodoPagoById,
  updateMetodoPago,
  deleteMetodoPago,
} from '../controllers/metodoPagoController.js';

const router = Router();

router.get('/', getMetodosPago); // Obtener todos los métodos de pago
router.post('/', createMetodoPago); // Crear un nuevo método de pago
router.get('/:id', getMetodoPagoById); // Obtener un método de pago por ID
router.put('/:id', updateMetodoPago); // Actualizar un método de pago por ID
router.delete('/:id', deleteMetodoPago); // Eliminar un método de pago por ID

export default router;
