let db = require('../database/models')

let usersController ={
    list: function(req, res){
        db.User.findAll()
        .then(userResponse =>{
            return res.render("UserList", {userResponse:userResponse})
        })
    },
    create: function(req, res){
        return res.render('createUser')
    },
    insert: function(req, res){
        
    }
}

module.exports = usersController;