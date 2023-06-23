import express from 'express';
import {  getTodos } from '../controller/ToDoController.js';

const router = express.Router();

router.get('/', getTodos);

export default router;

