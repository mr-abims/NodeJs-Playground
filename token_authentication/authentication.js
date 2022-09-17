require("dotenv").config()

const TOKEN = process.env.API_KEY

function authenticateUser(req, res) {
    return new Promise((resolve, reject) => {
        let token = req.headers.authorization
        
        if (!token) {
            reject("No token provided")
        }

        token = token.split(" ")[1]

        if (token !== TOKEN) {
            reject("Invalid token!")
        }

        resolve()
    })

}

module.exports = {
    authenticateUser
}
