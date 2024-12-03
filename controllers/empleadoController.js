import Empleado from '../models/Empleado.js';

export const getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los empleados.', error });
  }
};

export const createEmpleado = async (req, res) => {
  try {
    const { cedula, nombre, apellido, especialidad } = req.body;
    const nuevoEmpleado = await Empleado.create({ cedula, nombre, apellido, especialidad });
    res.status(201).json(nuevoEmpleado);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el empleado.', error });
  }
};

export const getEmpleadoById = async (req, res) => {
  try {
    const { id } = req.params;
    const empleado = await Empleado.findByPk(id);
    if (!empleado) {
      return res.status(404).json({ message: 'Empleado no encontrado.' });
    }
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el empleado.', error });
  }
};

export const updateEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const { cedula, nombre, apellido, especialidad } = req.body;
    const empleado = await Empleado.findByPk(id);
    if (!empleado) {
      return res.status(404).json({ message: 'Empleado no encontrado.' });
    }
    Object.assign(empleado, { cedula, nombre, apellido, especialidad });
    await empleado.save();
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el empleado.', error });
  }
};

export const deleteEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const empleado = await Empleado.findByPk(id);
    if (!empleado) {
      return res.status(404).json({ message: 'Empleado no encontrado.' });
    }
    await empleado.destroy();
    res.json({ message: 'Empleado eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el empleado.', error });
  }
};
