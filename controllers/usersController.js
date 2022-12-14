let db = require('../database/models')


let usersController ={
    list: function(req, res){
        db.User.findAll()        
        .then(userResponse =>{        
        res.render ('userList', {userResponse})       
    })
        .catch(err => console.error(err));
    },
    create: function(req, res){
        return res.render('createUser')
    },
    add: function(req, res){
        let user = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            dni: req.body.dni,
            dislikes: req.body.dislikes,
            allergies: req.body.allergies,
            pleasures: req.body.pleasures,  
        }
        db.User.create(user)
        .then(function(){
            return  res.redirect("/users/createUser")
        })
        .catch(err => console.error(err));
    },

    login: function(req, res){
        
		return res.redirect('/users/listUser');

    }

}

module.exports = usersController;