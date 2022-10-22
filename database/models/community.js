module.exports = function(sequelize, dataTypes){
    let alias = "Community"

    let cols ={
        id:{
            type: dataTypes.INTEGER,
            autoIncremente: true,
            primaryKey: true
        },
        name:{
            type: dataTypes.STRING,
            
        },
        
    }

    let config={
        tableName: "community",
        timestamps: false
    }

    let Community =sequelize.define(alias,cols,config)

    Community.associate = models => {
        Community.hasMany(models.User,{
            as: "user",
            foreingKey: "user_id"
        })
    }

    

    
    
    return Community;
}