import { Router } from 'express';
import {
  getEmpleados,
  createEmpleado,
  getEmpleadoById,
  updateEmpleado,
  deleteEmpleado,
} from '../controllers/empleadoController.js';

const router = Router();

router.get('/', getEmpleados); // Obtener todos los empleados
router.post('/', createEmpleado); // Crear un nuevo empleado
router.get('/:id', getEmpleadoById); // Obtener un empleado por ID
router.put('/:id', updateEmpleado); // Actualizar un empleado por ID
router.delete('/:id', deleteEmpleado); // Eliminar un empleado por ID

export default router;
