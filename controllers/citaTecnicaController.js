import CitaTecnica from '../models/CitaTecnica.js';
import Cliente from '../models/Cliente.js';
import Empleado from '../models/Empleado.js';

export const getCitasTecnicas = async (req, res) => {
  try {
    const citas = await CitaTecnica.findAll({
      include: [
        { model: Cliente, attributes: ['nombre', 'apellido'] },
        { model: Empleado, attributes: ['nombre', 'apellido'] },
      ],
    });
    res.json(citas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las citas técnicas.', error });
  }
};

export const createCitaTecnica = async (req, res) => {
  try {
    const { idEmpleado, idCliente, fecha, descripcion } = req.body;
    const nuevaCita = await CitaTecnica.create({ idEmpleado, idCliente, fecha, descripcion });
    res.status(201).json(nuevaCita);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la cita técnica.', error });
  }
};

export const deleteCitaTecnica = async (req, res) => {
  try {
    const { id } = req.params;
    const cita = await CitaTecnica.findByPk(id);
    if (!cita) {
      return res.status(404).json({ message: 'Cita técnica no encontrada.' });
    }
    await cita.destroy();
    res.json({ message: 'Cita técnica eliminada correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la cita técnica.', error });
  }
};
