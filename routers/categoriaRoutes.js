import { Router } from 'express';
import {
  getCategorias,
  createCategoria,
  getCategoriaById,
  updateCategoria,
  deleteCategoria,
} from '../controllers/categoriaController.js';

const router = Router();

router.get('/', getCategorias); // Obtener todas las categorías
router.post('/', createCategoria); // Crear una nueva categoría
router.get('/:id', getCategoriaById); // Obtener una categoría por ID
router.put('/:id', updateCategoria); // Actualizar una categoría por ID
router.delete('/:id', deleteCategoria); // Eliminar una categoría por ID

export default router;
