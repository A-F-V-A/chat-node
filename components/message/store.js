const Model = require('./model')


function addMessage(message){
    const newMessage = new Model(message)
    newMessage.save()
}

async function getMessages(User){

    let data = {}
    if(User != undefined)
        data = { User: User}

    const user = await Model.find(data)
    return user



}

async function updateText(id,text){
    const Message = await Model.findOne({
        _id : id
    })
    Message.message = text
    const newMessage = await Message.save()
    return newMessage
}

function deleteMessage(id){

    return Model.findByIdAndDelete(id)

}

module.exports = {
    add: addMessage,
    get: getMessages,
    upd: updateText,
    del:deleteMessage,
}