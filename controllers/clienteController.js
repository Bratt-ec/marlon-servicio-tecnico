import Cliente from '../models/Cliente.js';
import Ciudad from '../models/Ciudad.js';

export const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll({
      include: { model: Ciudad, attributes: ['nombre'] },
    });
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los clientes.', error });
  }
};

export const createCliente = async (req, res) => {
  try {
    const { cedula, nombre, apellido, direccion, telefono, email, fechaNac, ciudad_id } = req.body;
    const nuevoCliente = await Cliente.create({ cedula, nombre, apellido, direccion, telefono, email, fechaNac, ciudad_id });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el cliente.', error });
  }
};

export const getClienteById = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id, {
      include: { model: Ciudad, attributes: ['nombre'] },
    });
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado.' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el cliente.', error });
  }
};

export const updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { cedula, nombre, apellido, direccion, telefono, email, fechaNac, ciudad_id } = req.body;
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado.' });
    }
    Object.assign(cliente, { cedula, nombre, apellido, direccion, telefono, email, fechaNac, ciudad_id });
    await cliente.save();
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el cliente.', error });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado.' });
    }
    await cliente.destroy();
    res.json({ message: 'Cliente eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el cliente.', error });
  }
};
