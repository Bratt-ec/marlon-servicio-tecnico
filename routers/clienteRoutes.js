import { Router } from 'express';
import {
  getClientes,
  createCliente,
  getClienteById,
  updateCliente,
  deleteCliente,
} from '../controllers/clienteController.js';

const router = Router();

// Rutas para Clientes
router.get('/', getClientes); // Obtener todos los clientes
router.post('/', createCliente); // Crear un nuevo cliente
router.get('/:id', getClienteById); // Obtener un cliente por ID
router.put('/:id', updateCliente); // Actualizar un cliente por ID
router.delete('/:id', deleteCliente); // Eliminar un cliente por ID

export default router;
