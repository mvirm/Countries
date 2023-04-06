const { DataTypes } = require('sequelize');

module.exports= (sequelize) => {
    sequelize.define('Activity', {
       id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoincremet: true,
        primaryKey: true,
        unique: true
       }, 
       name:{
        type: DataTypes.STRING,
        allowNull: false
       },
       difficulty:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            min:1,
            max:5
        }
       },
       duration:{
        type: DataTypes.TIME
       },
       season:{
        type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
        allowNull: false
       }
    }, {timestamps: false});
}