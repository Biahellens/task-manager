import express from 'express';
import { TaskController } from '../controllers/task.controller';
import { authentification } from '../middleware/authentification';

const Router = express.Router();

// Rotas para tasks
Router.get('/allTasks', TaskController.getAllTasks);
Router.post('/createTask', authentification, TaskController.createTask);
Router.get('/getTasksByUser', authentification, TaskController.getTasksByUser);
Router.get('/getTaskStatusCount', authentification, TaskController.getTaskStatusCount);
Router.put('/:id/finish', authentification, TaskController.finishTask);
Router.delete('/:id/deleted', authentification, TaskController.deleteTask);

export { Router as taskRouter }