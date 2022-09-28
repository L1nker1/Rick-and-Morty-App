const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allownull:false,
    },
    name:{
      type: DataTypes.STRING,
      allownull: false,
    },
    species:{
      type: DataTypes.STRING,
      allownull:false,
    },
    origin:{
      type:DataTypes.STRING,
      allownull:false,
    },
    image:{
      type:DataTypes.STRING,
    },
    created:{
      type:DataTypes.BOOLEAN,
    },
    
  });
};