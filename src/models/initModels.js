const Users = require('./users.models')
const Categories = require('./categories.models')
const Posts = require('./posts.models')

const initModels = () => {

    //* has model1.hasOne(model2) model 2 tiene la llave foranea
    //* belongs model2.belongsTo(model1) model 2  tiene la llave foranea
    //? fk = posts
    //? post 1 -> 1 category
    Posts.belongsTo(Categories)
    //? categories 1 -> M  posts
    Categories.hasMany(Posts)

    //? fk = posts
    //? 1 publicación pertenece a 1 usuario
    Posts.belongsTo(Users)
    //? 1 usuario tiene muchas publicaciones
    Users.hasMany(Posts)

    
}

/*
? 1:1
belongsTo
hasOne

? 1:M
belongsTo
hasMany

? M:M
belongsToMany
hasMany

? 2 relaciones 1:M
belongsTo
hasMany

*/

module.exports = initModels