module.exports = function(sequelize, dataTypes){
    let alias = "User_rol"

    let cols ={
        user_id:{
            type: dataTypes.INTEGER,
            
        },

        rol_id:{
            type: dataTypes.INTEGER,
            
        }
    }   
        let config={
            tableName: "user_rol",
            timestamps: false
        }

        let User_rol =sequelize.define(alias,cols,config)
    
       User_rol.associate = models => {
            User_rol.hasMany(models.Rol,{
                as: "rols",
                through: "user_rol",
                foreingKey: "rol_id",
                otherKey: "id",
                timestamps: false
            })
    }
       /* User_rol.associate = models => {
            User_rol.hasMany(models.Users,{
            as: "users",
            through: "user_rol",
            foreingKey: "user_id",
            otherKey: "id",
            timestamps: false
    })
}*/

return User_rol;
          
}