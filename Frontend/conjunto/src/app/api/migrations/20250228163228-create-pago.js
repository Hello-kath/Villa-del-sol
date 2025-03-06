'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pagos', {
      idPago: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      valorPago: {
        type: Sequelize.DECIMAL(10, 2)
      },
      estadoPago: {
        type: Sequelize.ENUM('Pagado', 'No Pagado')
      },
      tipoPago: {
        type: Sequelize.ENUM('seguridad', 'servicios', 'administracion')
      },
      fechaPago: {
        type: Sequelize.DATE
      },
      idPropietario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Propietarios', // Nombre de la tabla referenciada
          key: 'idPropietario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pagos');
  }
};
