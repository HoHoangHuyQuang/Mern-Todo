import express from 'express';
import {  createToDo, deleteTodoById, getTodoById, getTodos, markDoneToDo, updateToDo } from '../controller/ToDoController.js';

const router = express.Router();

router.get('/', getTodos);

router.get('/:id', getTodoById);

router.post('/', createToDo);

router.put('/:id', updateToDo);

router.put('/:id/done', markDoneToDo);

router.delete('/:id', deleteTodoById)

export default router;

