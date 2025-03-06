'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Notificaciones', {
      idNotificacion: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.ENUM('Pago Pendiente', 'Confirmar Visita', 'Reporte de Pagos')
      },
      mensaje: {
        type: Sequelize.TEXT
      },
      estado: {
        type: Sequelize.ENUM('Leído', 'No leído')
      },
      fechaCreacion: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
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
      idResidente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Residentes', // Nombre de la tabla referenciada
          key: 'idResidente'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      idAdministrador: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Administradores', // Nombre de la tabla referenciada
          key: 'idAdministrador'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      idVisita: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Visitantes', // Nombre de la tabla referenciada
          key: 'idVisitante'
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
    await queryInterface.dropTable('Notificaciones');
  }
};
