// Modelo
const store = require('./store')

const addUser = (name) =>{

    console.log(name)

    if(!name)
        return Promise.reject('Invalido texto')
    console.log(name)
    const user = {
        name
    }

    return store.add(user)

}


const getUser = async (name) =>{
    return await store.get(name)
}



module.exports = {
    addUser,
    getUser
}

