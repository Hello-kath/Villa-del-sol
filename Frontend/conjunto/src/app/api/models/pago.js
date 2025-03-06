'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pago extends Model {
    static associate(models) {
      // define association here
      Pago.belongsTo(models.Propietario, { foreignKey: 'idPropietario' });
    }
  }

  Pago.init({
    idPago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    valorPago: {
      type: DataTypes.DECIMAL(10, 2)
    },
    estadoPago: {
      type: DataTypes.ENUM('Pagado', 'No Pagado')
    },
    tipoPago: {
      type: DataTypes.ENUM('seguridad', 'servicios', 'administracion')
    },
    fechaPago: {
      type: DataTypes.DATE
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
    modelName: 'Pago',
    tableName: 'Pagos'
  });
  
  return Pago;
};