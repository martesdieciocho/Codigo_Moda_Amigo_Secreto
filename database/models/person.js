module.exports = function(sequelize, dataTypes){
    let alias = "Person"

    let cols ={
        id:{
            type: dataTypes.INTEGER,
            autoIncremente: true,
            primaryKey: true
        },
        user_id:{
            type: dataTypes.INTEGER
        },
                
    }

    let config={
        tableName: "person",
        timestamps: false
    }

    let Person =sequelize.define(alias,cols,config)

    /*Person.associate = models => {
        Person.belongsTo(models.Person,{
            as: "user",
            foreingKey: "user_id"
        })
    }*/

    

    
    
    return Person;
}