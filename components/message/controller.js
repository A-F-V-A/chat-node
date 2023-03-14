const store = require('./store')



const addMessage = (user, message) => {
    return new Promise ((resolve, reject)=>{
        if(!user || !message){
            console.error('[addMessage] No hay Usuario o mensaje')
            return reject('Los datos son incorrectos')
        }
        store.add({
            user    : user,
            message : message,
            date    : new Date()
        })
        resolve('Se agrego correctamente')
    })
}


const ListMessage = user =>{
    return new Promise ((resolve, reject) =>{
        resolve(store.get(user))
    })
}

const updateMessage = (id,text) =>{
    return new Promise ( async (resolve, reject) =>{
        if(!id || !text){
            reject('Datos invalidos')
            return false
        }
        const result = await store.upd(id,text)
        resolve(result)
    })
}

const deleteMessage = id =>{
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
    addMessage,
    ListMessage,
    updateMessage,
    deleteMessage
}