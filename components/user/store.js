// Modulos 
const Model = require('./model')

const addUser = (user) =>{
    const newUser = new Model(user)
    return newUser.save()
}

const getUser = async (name) =>{
    let data = {}
    if(name != undefined)
        data = { name: name}

    const user = await Model.find(data)
    return user
}

const updateUser = async (id, name) =>{
    const user = await Model.findOne({
        _id : id
    })
    user.name = name
    const updUser = await user.save()
    return updUser
}

const deleteUser = id =>{
    return Model.findByIdAndDelete(id)
}

module.exports = {
    add: addUser,
    get: getUser,
    upd: updateUser,
    del:deleteUser
}