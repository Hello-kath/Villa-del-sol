'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Visitante extends Model {
    static associate(models) {
      // define association here
      Visitante.belongsTo(models.Propietario, { foreignKey: 'idPropietario' });
      Visitante.belongsTo(models.Residente, { foreignKey: 'idResidente' });
    }
  }

  Visitante.init({
    idVisitante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(60)
    },
    apellido: {
      type: DataTypes.STRING(60)
    },
    motivoVisita: {
      type: DataTypes.TEXT
    },
    direccionVisita: {
      type: DataTypes.STRING(60)
    },
    idPropietario: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Propietarios',
        key: 'idPropietario'
      }
    },
    idResidente: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Residentes',
        key: 'idResidente'
      }
    },
    fechaVisita: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    estado: {
      type: DataTypes.ENUM('Aprobado', 'Rechazado')
    }
  }, {
    sequelize,
    modelName: 'Visitante',
    tableName: 'Visitantes'
  });

  return Visitante;
};
