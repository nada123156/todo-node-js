const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');
const mongoose = require ('mongoose');

const {
    getTodos,
    getTodoById,
    updateTodo,
    createTodo,
    deleteTodo

} = require ("../controllers/Todo.controller");

router.get('/todos',getTodos )

router.get('/todos/:id',getTodoById)

router.put ('/todos/:id',updateTodo)

router.delete('/todos/:id',deleteTodo)
router.post('/todos',createTodo)

// router.get('/api/todos',(req, res) => {
//     res.json({message: "هنا هيرجع كل البيانات الموجودة"})
// })

// router.get('/api/todos/:id', (req, res) => {
//     const id = req.params.id;
//     res.json({message: `رجع ال id ${id}`})
// })

// router.post('/api/todos',(req, res) => {
//     const title = req.body.title;
//     res.status(201).json({message: `هنا هيرجع ال تايتل اللي تم انشاؤها ب ال تو دو ${title}`})
// })

// router.put('/api/todos/:id', (req, res) => {
//     const id = req.params.id;
//     const title = req.body.title;
//     res.json({message: `هيرجع ال تو دو اللي تم تحديثه ل ال${id} ${title}`})
// })
// router.delete('/api/todos/:id', (req, res) => {
//     const id = req.params.id;
//     res.json ({message: `هيرجع ال تو دو اللي تم حذفها ب ال ${id}`})
// })


module.exports = router;