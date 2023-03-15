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

const uptUser = (id , name) =>{
    return new Promise ( async (resolve, reject) =>{
        if(!id || !name){
            reject('Datos invalidos')
            return false
        }
        const result = await store.upd(id,name)
        resolve(result)
    })
}

const delUser = (id) =>{
    return new Promise ((resolve, reject) =>{
        if(!id){
            reject('id invalidos')
            return false 
        }

        store.del(id)
            .then((data) => resolve(data))
            .catch(e => {
                reject(e)
            })
    })
}



module.exports = {
    addUser,
    getUser,
    uptUser,
    delUser
}

