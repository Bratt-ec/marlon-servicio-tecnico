import Cliente from './models/Cliente.js';
import Ciudad from './models/Ciudad.js';

// Definir relaciones después de inicializar modelos
Cliente.belongsTo(Ciudad, { foreignKey: 'ciudad_id', as: 'Ciudad' });
Ciudad.hasMany(Cliente, { foreignKey: 'ciudad_id', as: 'Clientes' });

export default { Cliente, Ciudad };
