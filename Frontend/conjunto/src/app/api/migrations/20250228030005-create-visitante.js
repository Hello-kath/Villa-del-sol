'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Visitantes', {
      idVisitante: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(60)
      },
      apellido: {
        type: Sequelize.STRING(60)
      },
      motivoVisita: {
        type: Sequelize.TEXT
      },
      direccionVisita: {
        type: Sequelize.STRING(60)
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
      fechaVisita: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      estado: {
        type: Sequelize.ENUM('Aprobado', 'Rechazado')
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
    await queryInterface.dropTable('Visitantes');
  }
};
