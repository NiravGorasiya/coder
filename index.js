const express = require('express')
const app = express()
const port = 5000
//database connection
const cors = require("cors")
require("./db/Connection")
const Auth = require("./router/Auth")
const Movie = require("./router/Movie")
const { default: axios } = require('axios')
const User = require('./model/User')
const Empoyee = require("./router/Employeesalary")
const article = require('./router/Article')
const inventory = require("./router/Inventory")
const helmet = require("helmet")
const sales = require("./router/Sale")
const order = require("./router/Order")
const monthlyBudget = require("./router/MonthlyBudget")

app.use(express.json())
app.use(cors()) 
app.use(helmet())
app.use("/sales",sales)
app.use("/user",Auth)
app.use("/movie",Movie)
app.use("/employee",Empoyee)
app.use("/article",article)
app.use("/inventory",inventory)
app.use("/order",order)
app.use("/monthlyBudget",monthlyBudget)

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
});

const fruit = ["nirav","jenish","mehul","nirav","nirav","mehul"]


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(5000, () => {
  console.log(`Example app listening on port ${port}`)
})
