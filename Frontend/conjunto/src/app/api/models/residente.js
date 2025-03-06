'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Residente extends Model {
    static associate(models) {
      // define association here
      Residente.belongsTo(models.Propietario, {
        foreignKey: 'propietarioId',
        as: 'propietario'
      });
    }
  }
  
  Residente.init({
    idResidente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(60)
    },
    nombre: {
      type: DataTypes.STRING(60)
    },
    apellido: {
      type: DataTypes.STRING(60)
    },
    cc: {
      type: DataTypes.STRING(20)
    },
    telefono: {
      type: DataTypes.STRING(20)
    },
    rol: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'Residente'
    },
    relacion: {
      type: DataTypes.ENUM('Familiar', 'inquilino', 'otro')
    },
    direccion: {
      type: DataTypes.STRING(80)
    },
    sexo: {
      type: DataTypes.ENUM('Femenino', 'Masculino', 'otro')
    },
    contraseña: {
      type: DataTypes.STRING(100)
    },
    propietarioId: { 
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Propietarios', //Nombre de la tabla referenciada
        key: 'idPropietario'   //Clave primaria en Propietarios
      }
    }
  }, {
    sequelize,
    modelName: 'Residente',
    tableName: 'Residentes'
  });

  return Residente;
};
