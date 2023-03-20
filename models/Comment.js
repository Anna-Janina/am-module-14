const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

//Create Comment model
Comments.init(
    {
        commentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        commentText: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3]
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }  
        },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true, 
        modelName: 'Comments',
    }
);

module.exports = Comments;