function retrieveAll(req,res){
    res.render('music', {
        locals:{
            messagaage: "THIS IS LOTS OF MUSIC!"
        }
    })
}

module.exports = retrieveAll