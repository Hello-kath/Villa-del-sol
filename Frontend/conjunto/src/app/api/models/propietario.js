'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Propietario extends Model {
    static associate(models) {
      // define association here
      Propietario.hasMany(models.Apartamento, {
        foreignKey: 'idPropietario', // Llave foránea en el modelo Apartamento
        as: 'apartamentos', // Alias para la relación
    });
    }
  }

  Propietario.init({
    idPropietario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING(60),
      unique: true,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    cc: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    rol: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'Propietario'
    },
    sexo: {
      type: DataTypes.ENUM('Femenino', 'Masculino', 'otro'),
      allowNull: false
    },
    direccionVivienda: {
      type: DataTypes.STRING(80),
      unique: true,
      allowNull: false
    },
    contraseña: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Propietario',
    tableName: 'Propietarios',
    timestamps: true
  });

  return Propietario;
};
