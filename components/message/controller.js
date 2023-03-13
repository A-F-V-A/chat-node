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
        resolve('Se aagrego correctamente')
    })
}


const ListMessage = () =>{
    return new Promise ((resolve, reject) =>{
        resolve(store.get())
    })
}


module.exports = {
    addMessage,
    ListMessage,
}