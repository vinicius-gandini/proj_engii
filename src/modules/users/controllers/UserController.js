class UserController {
    async create(req, res) {
        const { name, email, password, password_confirm } = req.body

        if(!name)
        return res.json({ message: 'name is required' })

        if(!email)
        return res.json({ message: 'email is required' })

        if(!password)
        return res.json({ message: 'password is required' })

        if(!password_confirm)
        return res.json({ message: 'password_confirm required' })

        if(password !== password_confirm)
        return res.json({ message: 'password not match' })

        return res.send('Ok');
    }
}

module.exports = new UserController();