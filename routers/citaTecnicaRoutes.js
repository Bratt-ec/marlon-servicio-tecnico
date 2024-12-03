import { Router } from 'express';
import {
  getCitasTecnicas,
  createCitaTecnica,
  deleteCitaTecnica,
} from '../controllers/citaTecnicaController.js';

const router = Router();

router.get('/', getCitasTecnicas); // Obtener todas las citas técnicas
router.post('/', createCitaTecnica); // Crear una nueva cita técnica
router.delete('/:id', deleteCitaTecnica); // Eliminar una cita técnica

export default router;

