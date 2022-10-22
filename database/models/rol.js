module.exports = function(sequelize, dataTypes){
    let alias = "Rol"

    let cols ={
        id:{
            type: dataTypes.INTEGER,
            autoIncremente: true,
            primaryKey: true
        },

        name:{
            type: dataTypes.STRING
        }

    }
      let config={
        tableName: "rol",
        timestamps: false
    }

    let Rol =sequelize.define(alias,cols,config)

    /*Rol.associate = models => {
        Rol.hasMany(models.User_rol,{
            as: "User_rol",
            foreingKey: "id"
        })
    }*/
    
    return Rol;
}