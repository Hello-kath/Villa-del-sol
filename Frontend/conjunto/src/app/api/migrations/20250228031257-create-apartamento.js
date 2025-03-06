'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Apartamentos', {
      idApartamento: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      direccion: {
        type: Sequelize.STRING(60)
      },
      numHabitaciones: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.ENUM('Ocupado', 'Desocupado', 'En mantenimiento')
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
    await queryInterface.dropTable('Apartamentos');
  }
};
