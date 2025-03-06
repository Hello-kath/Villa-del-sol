'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Notificacion extends Model {
    static associate(models) {
      // define association here
      Notificacion.belongsTo(models.Propietario, { foreignKey: 'idPropietario' });
      Notificacion.belongsTo(models.Residente, { foreignKey: 'idResidente' });
      Notificacion.belongsTo(models.Administrador, { foreignKey: 'idAdministrador' });
      Notificacion.belongsTo(models.Visitante, { foreignKey: 'idVisita' });
    }
  }

  Notificacion.init({
    idNotificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.ENUM('Pago Pendiente', 'Confirmar Visita', 'Reporte de Pagos')
    },
    mensaje: {
      type: DataTypes.TEXT
    },
    estado: {
      type: DataTypes.ENUM('Leído', 'No leído')
    },
    fechaCreacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
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
    idAdministrador: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Administradores',
        key: 'idAdministrador'
      }
    },
    idVisita: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Visitantes',
        key: 'idVisitante'
      }
    }
  }, {
    sequelize,
    modelName: 'Notificacion',
    tableName: 'Notificaciones'
  });

  return Notificacion;
};
