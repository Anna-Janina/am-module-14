const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Create Post model
class Post extends Model {}

//Create columns for post model
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            }
        },
        userId: {
            type: DataTypes.STRING,
            references: {
                model: 'User',
                key: 'id'
            }
        },
    }, 
    {
        sequelize,
        freezeTableName: true,
        underscored: true, 
        modelName: 'post'
    }
    );

    module.exports = Post;