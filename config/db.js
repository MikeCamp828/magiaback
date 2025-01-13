// config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://pueblos_magicos_db_user:UGniRG69mzHnV1f8VLX1G7MkZHhRQfIG@dpg-cu25qh56l47c73a99hc0-a/pueblos_magicos_db', {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Importante para conexiones seguras
    },
  },
});
sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa.'))
  .catch((err) => console.error('Error al conectar la base de datos:', err));
module.exports = sequelize;
