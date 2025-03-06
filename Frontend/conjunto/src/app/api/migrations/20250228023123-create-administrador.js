'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Administradores', {
      idAdministrador: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      apellido: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(60),
        unique: true,
        allowNull: false
      },
      cc: {
        type: Sequelize.STRING(20),
        unique: true,
        allowNull: false
      },
      telefono: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      rol: {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: 'Administrador'
      },
      sexo: {
        type: Sequelize.ENUM('Femenino', 'Masculino', 'otro'),
        allowNull: false
      },
      contraseña: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Administradores');
  }
};

