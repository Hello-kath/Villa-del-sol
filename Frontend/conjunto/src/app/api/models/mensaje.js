'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mensaje extends Model {
    static associate(models) {
      // define association here
      Mensaje.belongsTo(models.Propietario, { foreignKey: 'idPropietarioRemitente', as: 'PropietarioRemitente' });
      Mensaje.belongsTo(models.Residente, { foreignKey: 'idResidenteRemitente', as: 'ResidenteRemitente' });
      Mensaje.belongsTo(models.Administrador, { foreignKey: 'idAdministradorRemitente', as: 'AdministradorRemitente' });
      Mensaje.belongsTo(models.Propietario, { foreignKey: 'idPropietarioDestinatario', as: 'PropietarioDestinatario' });
      Mensaje.belongsTo(models.Residente, { foreignKey: 'idResidenteDestinatario', as: 'ResidenteDestinatario' });
      Mensaje.belongsTo(models.Administrador, { foreignKey: 'idAdministradorDestinatario', as: 'AdministradorDestinatario' });
    }
  }

  Mensaje.init({
    idMensaje: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    idPropietarioRemitente: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Propietarios',
        key: 'idPropietario'
      }
    },
    idResidenteRemitente: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Residentes',
        key: 'idResidente'
      }
    },
    idAdministradorRemitente: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Administradores',
        key: 'idAdministrador'
      }
    },
    idPropietarioDestinatario: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Propietarios',
        key: 'idPropietario'
      }
    },
    idResidenteDestinatario: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Residentes',
        key: 'idResidente'
      }
    },
    idAdministradorDestinatario: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Administradores',
        key: 'idAdministrador'
      }
    },
    mensaje: {
      type: DataTypes.TEXT
    },
    fechaEnvio: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    estado: {
      type: DataTypes.ENUM('Leído', 'No leído')
    }
  }, {
    sequelize,
    modelName: 'Mensaje',
    tableName: 'Mensajes'
  });

  return Mensaje;
};
