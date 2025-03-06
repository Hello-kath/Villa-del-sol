'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Administrador extends Model {
    static associate(models) {
      // define association here si es necesario
    }
  }

  Administrador.init(
    {
      idAdministrador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true,
      },
      cc: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      telefono: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      rol: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: 'Administrador',
      },
      sexo: {
        type: DataTypes.ENUM('Femenino', 'Masculino', 'otro'),
        allowNull: false,
      },
      contraseña: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Administrador',
      tableName: 'Administradores', // Corrección del nombre de la tabla
      timestamps: true,
    }
  );

  return Administrador;
};
