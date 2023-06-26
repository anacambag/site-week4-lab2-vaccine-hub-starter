const {UnauthorizedError} = require("../utils/errors")

class User{
    static async login(credentials){

        //USER SHOULD SUMBIT THEIR EMAIL AND PASSWORD
        // IF ANY OF THESE FIELDS ARE MISSING THROW AND ERROR
        //
        // LOOK USER IN DB BY EMAIL
        // IF USER FOUND COMPARE SUBMITTED PASSWORDS WITH PASSWORD IN DB
        // IF MATCH RETURN USER
        //
        // IF GOES WRONG THROUGH ERROR

        throw new UnauthorizedError("Invalid email/password combo")

    }

    static async register(credentials) {

        //User should submit their email, pw, rsvp status
        // if any of these fields are missing, throw error
        //
        // make sure no user already exist in the system with that email
        // if it does, throw error

        

    }
}

module.exports = User