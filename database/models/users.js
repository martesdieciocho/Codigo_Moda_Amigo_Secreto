const { userInfo } = require("os")

module.exports = function(sequelize, dataTypes){
    let alias = "User"

    let cols ={
        id:{
            type: dataTypes.INTEGER,
            autoIncremente: true,
            primaryKey: true
        },
        first_name:{
            type: dataTypes.STRING,
            
        },
        last_name:{
            type: dataTypes.STRING
        },
        pleasures:{
            type: dataTypes.STRING
        }
        ,
        dislikes:{
            type: dataTypes.STRING
        },
        allergies:{
            type: dataTypes.STRING
        },
        rol_id:{
            type: dataTypes.INTEGER
        },
        person_id:{
            type: dataTypes.INTEGER
        },
        community_id:{
            type: dataTypes.INTEGER
        }

    }

    let config={
        tableName: "user",
        timestamps: false
    }

    let User =sequelize.define(alias,cols,config)

    /*User.associate = models => {
        User.belongsTo(models.Person,{
            as: "person",
            foreingKey: "person_id"
        })
    }

    User.associate = models => {
        User.belongsTo(models.Community,{
            as: "community",
            foreingKey: "community_id"
        })
    }

    User.associate = models => {
        User.belongsTo(models.user_rol,{
            as: "user_rol",
            foreingKey: "id"
        })
    }*/


    
    return User;
}