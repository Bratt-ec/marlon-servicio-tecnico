import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('marlon_servi_tec', 'postgres', 'admin2023', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});

export default sequelize;
