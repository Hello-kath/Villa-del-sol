'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Apartamento extends Model {
    static associate(models) {
      // define association here

      Apartamento.belongsTo(models.Propietario, {
        foreignKey: 'idPropietario', // Llave foránea en el modelo Apartamento
        as: 'propietario', // Alias para la relación
      });

    }
  }

  Apartamento.init({
    idApartamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    direccion: {
      type: DataTypes.STRING(60)
    },
    numHabitaciones: {
      type: DataTypes.INTEGER
    },
    estado: {
      type: DataTypes.ENUM('Ocupado', 'Desocupado', 'En mantenimiento')
    },
    idPropietario: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Propietarios',
        key: 'idPropietario'
      }
    }
  }, {
    sequelize,
    modelName: 'Apartamento',
    tableName: 'Apartamentos'
  });

  return Apartamento;
};
