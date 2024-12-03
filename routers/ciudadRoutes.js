import { Router } from 'express';
import {
  getCiudades,
  createCiudad,
  getCiudadById,
  updateCiudad,
  deleteCiudad,
} from '../controllers/ciudadController.js';

const router = Router();

router.get('/', getCiudades); // Obtener todas las ciudades
router.post('/', createCiudad); // Crear una nueva ciudad
router.get('/:id', getCiudadById); // Obtener una ciudad por ID
router.put('/:id', updateCiudad); // Actualizar una ciudad por ID
router.delete('/:id', deleteCiudad); // Eliminar una ciudad por ID

export default router;
