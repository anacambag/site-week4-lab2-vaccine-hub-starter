const express = require("express")
const router = express.Router()

router.post("/login", async(req, res, next)=>{

    try{
        // take the users email and passwords and attempting to authenticate them

    } catch(err){
        next(err)
    }
})

router.post("/register", async(req, res, next)=>{
    // take the users email, password, rsvp status

    try{
        // take the users email, password, rsvp status and
    } catch(err){
        next(err)
    }
})

module.exports = router