const express =  require('express');
const router = express.Router();
const singUpTemplateCopy = require('../models/SignUp.Models');
const bcrypt = require('bcrypt');

router.post('/signup', async (request, response)=>{

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const signedUpUser = new singUpTemplateCopy({
        fullName:request.body.fullName,
        userName:request.body.userName,
        email:request.body.email,
        password:securePassword

    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
});


module.exports = router;