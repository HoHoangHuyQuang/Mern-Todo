import express from 'express';
import {  createToDo, deleteTodoById, getTodos, updateToDo } from '../controller/ToDoController.js';

const router = express.Router();

router.get('/', getTodos);

router.post('/', createToDo);

router.put('/:id', updateToDo);

router.delete('/:id', deleteTodoById)

export default router;

