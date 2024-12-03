import Compra from '../models/Compra.js';
import Cliente from '../models/Cliente.js';
import MetodoPago from '../models/MetodoPago.js';

export const getCompras = async (req, res) => {
  try {
    const compras = await Compra.findAll({
      include: [
        { model: Cliente, attributes: ['nombre', 'apellido'] },
        { model: MetodoPago, attributes: ['tipo'] },
      ],
    });
    res.json(compras);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las compras.', error });
  }
};

export const createCompra = async (req, res) => {
  try {
    const { cliente_id, fecha, metodo_pago_id } = req.body;
    const nuevaCompra = await Compra.create({ cliente_id, fecha, metodo_pago_id });
    res.status(201).json(nuevaCompra);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la compra.', error });
  }
};

export const getCompraById = async (req, res) => {
  try {
    const { id } = req.params;
    const compra = await Compra.findByPk(id, {
      include: [
        { model: Cliente, attributes: ['nombre', 'apellido'] },
        { model: MetodoPago, attributes: ['tipo'] },
      ],
    });
    if (!compra) {
      return res.status(404).json({ message: 'Compra no encontrada.' });
    }
    res.json(compra);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la compra.', error });
  }
};

export const deleteCompra = async (req, res) => {
  try {
    const { id } = req.params;
    const compra = await Compra.findByPk(id);
    if (!compra) {
      return res.status(404).json({ message: 'Compra no encontrada.' });
    }
    await compra.destroy();
    res.json({ message: 'Compra eliminada correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la compra.', error });
  }
};
