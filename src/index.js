// const math = require ('./math');

// console.log(math.add(2, 3))
// console.log(math.subtract(5,2))

// fs.readFile('file.txt', (err, data) => {...})
const dns = require('dns');

dns.setServers(['1.1.1.1', '8.8.8.8']);

require('dotenv').config();


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT;

const cors = require ('cors');
app.use(cors());

const todosRoutes = require ('./routes/todos');


mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Mongo DB connected"))
.catch((err) => console.log(err));




app.use(express.json());
app.use(myMiddleware);
//logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});



// app.delete('/api/todos/:id', (req, res) => {
//     req.params.id;
//     req.body
//     res.send('hello ToDo App!');
// })
// console.log(port);

// app.get('/api/todos',(req, res) => {
//     res.json({message: "هنا هيرجع كل البيانات الموجودة"})
// })

// app.get('/api/todos/:id', (req, res) => {
//     const id = req.params.id;
//     res.json({message: `رجع ال id ${id}`})
// })

// app.post('/api/todos',(req, res) => {
//     const title = req.body.title;
//     res.status(201).json({message: `هنا هيرجع ال تايتل اللي تم انشاؤها ب ال تو دو ${title}`})
// })

// app.put('/api/todos/:id', (req, res) => {
//     const id = req.params.id;
//     const title = req.body.title;
//     res.json({message: `هيرجع ال تو دو اللي تم تحديثه ل ال${id} ${title}`})
// })

// app.delete('/api/todos/:id', (req, res) => {
//     const id = req.params.id;
//     res.json ({message: `هيرجع ال تو دو اللي تم حذفها ب ال ${id}`})
// })
app.use('/api',todosRoutes);
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

function myMiddleware(req, res, next){

    next();
}