'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mensajes', {
      idMensaje: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPropietarioRemitente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Propietarios', // Nombre de la tabla referenciada
          key: 'idPropietario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      idResidenteRemitente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Residentes',
          key: 'idResidente'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      idAdministradorRemitente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Administradores',
          key: 'idAdministrador'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      idPropietarioDestinatario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Propietarios',
          key: 'idPropietario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      idResidenteDestinatario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Residentes',
          key: 'idResidente'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      idAdministradorDestinatario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Administradores',
          key: 'idAdministrador'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      mensaje: {
        type: Sequelize.TEXT
      },
      fechaEnvio: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      estado: {
        type: Sequelize.ENUM('Leído', 'No leído')
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
    await queryInterface.dropTable('Mensajes');
  }
};
