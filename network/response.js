exports.success = (req,res,status,message) =>{
    res
        .status(status || 200)
        .send({
            error:'',
            body: message || 'OK'
        })
}

exports.error = (req,res,status,message) =>{
    res
        .status(status || 500)
        .send({
            error:message || 'ERROR',
            body: ''
        })
}


