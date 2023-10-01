const { request, response } = require("express")


const testing = (req = request,res = response) => {
    
    return res.json({
        msj:'OK'
    })
}

module.exports = { testing }