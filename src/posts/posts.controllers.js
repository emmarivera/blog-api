const Posts = require('../models/posts.models')
const Categories = require('../models/categories.models')
const Users = require('../models/users.models')
const uuid = require('uuid')

//? Obtenga todos los posts

const findAllPosts = async () => {
    const data = await Posts.findAll({
        attributes: {
            exclude: ['categoryId', 'userId']
        },
        include: [  //? include nos permite generar joins
            {
                model: Categories //? Hacemos el primer join con categories
            },
            {
                model: Users, //? Hacemos otro join con users
                attributes: { //? Atributtes nos permite definir los atributos que queremos mostrar
                    exclude: ['email', 'password', 'role', 'createdAt', 'updatedAt']
                }
            }
        ]
    })
    return data
}

//? Crear nuevos posts

const createPost = async (obj) => {
    const data = await Posts.create({
        id: uuid.v4(),
        title: obj.title,
        content: obj.content,
        userId: obj.userId,
        coverUrl: obj.coverUrl,
        categoryId: obj.categoryId
    })
    return data
}

module.exports = {
    findAllPosts,
    createPost
}