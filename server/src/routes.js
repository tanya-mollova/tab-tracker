const { register } = require("./controllers/AuthenticationController")
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports =(app)=>{
    app.post('/reqister', AuthenticationControllerPolicy.register, AuthenticationController.register)
}