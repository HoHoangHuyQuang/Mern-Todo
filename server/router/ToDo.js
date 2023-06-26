import express from 'express';
import {  createToDo, deleteTodoById, getTodoById, getTodos, updateToDo } from '../controller/ToDoController.js';

const router = express.Router();

router.get('/', getTodos);

router.get('/:id', getTodoById);

router.post('/', createToDo);

router.put('/:id', updateToDo);

router.delete('/:id', deleteTodoById)

export default router;

