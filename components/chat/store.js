const Model = require('./model')


function addChat(chat) {
    const myChat = new Model(chat)
    return myChat.save()
}

function listChats(userId) {
    return new Promise((resolve, reject) => {
        let filter = {}
        if (userId) { 
            filter = { users: userId, } 
        }
        const chat = Model.find(filter).populate('users')
        .catch(e => reject(e))

        resolve(chat)

    });
}

module.exports = { 
    add: addChat, 
    list: listChats,
}