let db = require('../database/models')

let usersController ={
    list: function(req, res){
        db.User.findAll()
        .then(userResponse =>{
            return res.render("UserList", {userResponse:userResponse})
        })
    }
}

module.exports = usersController;