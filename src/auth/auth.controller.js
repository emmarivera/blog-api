//? email
//? password
const { findUserByEmail } = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypto')

//? esta función va a validar si los datos pertenecen o no a un usuario
const checkUserCredential = async (email, password) => {
    try {
        const user = await findUserByEmail(email)
        const verifyPassword = comparePassword(password, user.password)
        if (verifyPassword) {
            return user
        } else {
            return null
        }
    } catch (error) {
        return null
    }    
}
// checkUserCredential('emma@gmail.com', 'root')
// .then(data => console.log(data))
// .catch(err => console.log(err))

module.exports = checkUserCredential