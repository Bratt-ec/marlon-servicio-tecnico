import MetodoPago from '../models/MetodoPago.js';

export const getMetodosPago = async (req, res) => {
  try {
    const metodos = await MetodoPago.findAll();
    res.json(metodos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los métodos de pago.', error });
  }
};

export const createMetodoPago = async (req, res) => {
  try {
    const { tipo } = req.body;
    const nuevoMetodo = await MetodoPago.create({ tipo });
    res.status(201).json(nuevoMetodo);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el método de pago.', error });
  }
};

export const getMetodoPagoById = async (req, res) => {
  try {
    const { id } = req.params;
    const metodo = await MetodoPago.findByPk(id);
    if (!metodo) {
      return res.status(404).json({ message: 'Método de pago no encontrado.' });
    }
    res.json(metodo);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el método de pago.', error });
  }
};

export const updateMetodoPago = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipo } = req.body;
    const metodo = await MetodoPago.findByPk(id);
    if (!metodo) {
      return res.status(404).json({ message: 'Método de pago no encontrado.' });
    }
    metodo.tipo = tipo;
    await metodo.save();
    res.json(metodo);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el método de pago.', error });
  }
};

export const deleteMetodoPago = async (req, res) => {
  try {
    const { id } = req.params;
    const metodo = await MetodoPago.findByPk(id);
    if (!metodo) {
      return res.status(404).json({ message: 'Método de pago no encontrado.' });
    }
    await metodo.destroy();
    res.json({ message: 'Método de pago eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el método de pago.', error });
  }
};