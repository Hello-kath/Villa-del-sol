'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Residentes', {
      idResidente: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING(60)
      },
      nombre: {
        type: Sequelize.STRING(60)
      },
      apellido: {
        type: Sequelize.STRING(60)
      },
      cc: {
        type: Sequelize.STRING(20)
      },
      telefono: {
        type: Sequelize.STRING(20)
      },
      rol: {
        type: Sequelize.STRING(20),
        allowNull: false,
        defaultValue: 'Residente'
      },
      relacion: {
        type: Sequelize.ENUM('Familiar', 'inquilino', 'otro')
      },
      direccion: {
        type: Sequelize.STRING(80)
      },
      sexo: {
        type: Sequelize.ENUM('Femenino', 'Masculino', 'otro')
      },
      contraseña: {
        type: Sequelize.STRING(100)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      propietarioId: {  //  clave foránea
        type: Sequelize.INTEGER,
        allowNull: true, 
        references: {
          model: 'Propietarios', //Referenciamos la tabla Propietarios
          key: 'idPropietario'   //La clave primaria correcta de Propietarios
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL' // Si un propietario es eliminado, el campo queda NULL
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Residentes');
  }
};
