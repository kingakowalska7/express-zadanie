const User = require('../models/UserModel')

module.exports = {
    index: (req, res) => {
    User.find({}).lean().exec((err, users) => {
        if (err) {
            res.send('Get users error')
        }
        console.log(users)
        // res.send('Działa')
        res.render('userViews/user', {users: users})
    })
    }
}