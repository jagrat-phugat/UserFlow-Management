const express = require("express")
const app = express()
const path = require("path")
const PORT = 5000
const userModel = require("./models/models")
const { urlencoded } = require("body-parser")
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.render("index")
})
app.get('/read', async (req, res) => {
    let allUsers = await userModel.find()
    res.render("users" , {users : allUsers})
})
app.get('/edit/:id', async (req, res) => {
    let user = await userModel.findOne({Id : req.params.id})
    res.render("edit", {user})
})
app.post('/create', async (req, res) => {
    let {Id, name, email, age, gender} = req.body
    let user = await userModel.create({
        Id, name, email, age, gender
    })
    return res.redirect('/read')
})
app.get('/delete/:id', async (req, res) => {
    let userId = await userModel.findOneAndDelete({Id : req.params.id})
    res.redirect('/read')
})
app.get('/read/:id', async (req, res) => {
    let user = await userModel.findById({Id : req.params.id})
    res.render("edit", {user})
})
app.post('/update/:id', async (req, res) => {
    let {Id, name, email, image} = req.body
        let userUpdate = await userModel.findOneAndUpdate({Id : req.params.id}, {name, email, image}, {new : true})
        return res.redirect("/read")
})

app.listen(PORT, () => {
    console.log(`Server connected at http://localhost:${PORT}`);
})

