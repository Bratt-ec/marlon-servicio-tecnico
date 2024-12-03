import Ciudad from '../models/Ciudad.js';

export const getCiudades = async (req, res) => {
  try {
    const ciudades = await Ciudad.findAll();
    res.json(ciudades);
  } catch (error) {
    console.log("🚀 ~ getCiudades ~ error:", error)
    res.status(500).json({ message: 'Error al obtener las ciudades.', error });
  }
};

export const createCiudad = async (req, res) => {
  try {
    const { nombre } = req.body;
    const nuevaCiudad = await Ciudad.create({ nombre });
    res.status(201).json(nuevaCiudad);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la ciudad.', error });
  }
};

export const getCiudadById = async (req, res) => {
  try {
    const { id } = req.params;
    const ciudad = await Ciudad.findByPk(id);
    if (!ciudad) {
      return res.status(404).json({ message: 'Ciudad no encontrada.' });
    }
    res.json(ciudad);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la ciudad.', error });
  }
};

export const updateCiudad = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const ciudad = await Ciudad.findByPk(id);
    if (!ciudad) {
      return res.status(404).json({ message: 'Ciudad no encontrada.' });
    }
    ciudad.nombre = nombre;
    await ciudad.save();
    res.json(ciudad);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la ciudad.', error });
  }
};

export const deleteCiudad = async (req, res) => {
  try {
    const { id } = req.params;
    const ciudad = await Ciudad.findByPk(id);
    if (!ciudad) {
      return res.status(404).json({ message: 'Ciudad no encontrada.' });
    }
    await ciudad.destroy();
    res.json({ message: 'Ciudad eliminada correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la ciudad.', error });
  }
};
