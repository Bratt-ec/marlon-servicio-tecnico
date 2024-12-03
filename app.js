import express from 'express';
import bodyParser from 'body-parser';

// Importar rutas
import ciudadRoutes from './routers/ciudadRoutes.js';
import metodoPagoRoutes from './routers/metodoPagoRoutes.js';
import categoriaRoutes from './routers/categoriaRoutes.js';
import clienteRoutes from './routers/clienteRoutes.js';
import empleadoRoutes from './routers/empleadoRoutes.js';
import productoRoutes from './routers/productoRoutes.js';
import compraRoutes from './routers/compraRoutes.js';
import compraProductoRoutes from './routers/compraProductoRoutes.js';
import citaTecnicaRoutes from './routers/citaTecnicaRoutes.js';

import Producto from './models/Producto.js';
import Categoria from './models/Categoria.js';
import Ciudad from './models/Ciudad.js';

// Importar asociaciones (relaciones entre modelos)
import './associations.js';
import CitaTecnica from './models/CitaTecnica.js';
import Empleado from './models/Empleado.js';
import Cliente from './models/Cliente.js';
import Compra from './models/Compra.js';
import CompraProducto from './models/CompraProducto.js';
import MetodoPago from './models/MetodoPago.js';

const app = express();

// Middleware para parsear JSON
app.use(bodyParser.json());

// Rutas
app.use('/ciudades', ciudadRoutes);
app.use('/metodos-pago', metodoPagoRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/clientes', clienteRoutes);
app.use('/empleados', empleadoRoutes);
app.use('/productos', productoRoutes);
app.use('/compras', compraRoutes);
app.use('/compra-productos', compraProductoRoutes);
app.use('/citas-tecnicas', citaTecnicaRoutes);

// Inicializar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


(async () => {
  try {
    await Ciudad.sync({ alter: true });
    await Cliente.sync({ alter: true });
    await Compra.sync({ alter: true });
    await MetodoPago.sync({ alter: true });
    await CompraProducto.sync({ alter: true });
    await CitaTecnica.sync({ alter: true });
    await Empleado.sync({ alter: true });
    console.log('Tabla Categoria sincronizada.');
    // Sincronizar Categoria primero porque Producto depende de ella
    await Categoria.sync({ alter: true });
    console.log('Tabla Categoria sincronizada.');

    // Sincronizar Producto
    await Producto.sync({ alter: true });
    console.log('Tabla Producto sincronizada.');
  } catch (error) {
    console.error('Error al sincronizar las tablas:', error);
  }
})();

/*
http://localhost:3000/ciudades
http://localhost:3000/ciudades/{id}
http://localhost:3000/clientes
http://localhost:3000/productos
http://localhost:3000/empleados
*/