const {Model, DataTypes} = require('sequilize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password);
      }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
                type: DataTypes.STRING,
                allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
        }  
    },
);

module.exports = User;