import { Request, Response } from 'express';
import { IsNull, getRepository } from 'typeorm';
import { Task } from '../entities/Task';
import { User } from '../entities/User';

interface AuthenticatedRequest extends Request {
  currentUser?: User;
}

export class TaskController {
  static async createTask(req: AuthenticatedRequest, res: Response) {
    try {
      const { description } = req.body;

      if (!description) {
        return res.status(400).json({ message: 'Descrição é obrigatória' });
      }

      if (!req.currentUser) {
        return res.status(401).json({ message: 'Usuário não autenticado' });
      }

      const authenticatedUser: User = req.currentUser;
      const taskRepository = getRepository(Task);

      const existingTask = await taskRepository.findOne({
        where: {
          description,
          user: { id: authenticatedUser.id },
          deleted_at: IsNull(),
        },
      });

      if (existingTask) {
        return res.status(409).json({ message: 'Já existe uma tarefa com esta descrição' });
      }

      const task = new Task();
      task.description = description;
      task.status = 'pending';
      task.user = authenticatedUser;

      try {
        await taskRepository.save(task);

        return res.status(201).json({ message: 'Tarefa criada com sucesso', task });
      } catch (error) {
        console.error('Erro ao criar tarefa:', error);
        return res.status(500).json({ message: 'Erro interno do servidor' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  static async getTasksByUser(req: AuthenticatedRequest, res: Response) {
    try {
      if (!req.currentUser) {
        return res.status(401).json({ message: 'Usuário não autenticado' });
      }

      const authenticatedUser: User = req.currentUser;

      const taskRepository = getRepository(Task);
      const tasks = await taskRepository.find({
        where: {
          user: { id: authenticatedUser.id },
          deleted_at: IsNull(),
        },
      });
      console.info(tasks)
      return res.status(200).json({ tasks });
    } catch (error) {
      console.error('Erro ao obter tarefas do usuário:', error);
      return res.status(500).json({ message: 'Erro interno do servidor'});
    }
  }

  static async finishTask(req: AuthenticatedRequest, res: Response) {
    try {
      if (!req.currentUser) {
        return res.status(401).json({ message: 'Usuário não autenticado' });
      }

      const authenticatedUser: User = req.currentUser;

      const taskId = req.params.id;

      const taskRepository = getRepository(Task);
      const task = await taskRepository.findOne({
        where: {
          id: taskId,
          user: { id: authenticatedUser.id },
          deleted_at: IsNull(),
        },
      });

      if (!task) {
        return res.status(404).json({ message: 'Tarefa não encontrada' });
      }

      if (task.status === 'finished') {
        return res.status(400).json({ message: 'A tarefa já está concluída' });
      }

      task.status = 'finished';

      await taskRepository.save(task);

      return res.status(200).json({ message: 'Tarefa finalizada com sucesso', task });
    } catch (error) {
      console.error('Erro ao finalizar tarefa:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  static async deleteTask(req: AuthenticatedRequest, res: Response) {
    try {
      if (!req.currentUser) {
        return res.status(401).json({ message: 'Usuário não autenticado' });
      }

      const authenticatedUser: User = req.currentUser;
      const taskId = req.params.id;

      const taskRepository = getRepository(Task);
      const task = await taskRepository.findOne({
        where: {
          id: taskId,
          user: { id: authenticatedUser.id },
          deleted_at: IsNull(),
        },
      });

      if (!task) {
        return res.status(404).json({ message: 'Tarefa não encontrada' });
      }

      task.deleted_at = new Date();
      await taskRepository.save(task);

      return res.status(200).json({ message: 'Tarefa excluída com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  static async getTaskStatusCount(req: AuthenticatedRequest, res: Response) {
    try {
      if (!req.currentUser) {
        return res.status(401).json({ message: 'Usuário não autenticado' });
      }

      const authenticatedUser: User = req.currentUser;

      const taskRepository = getRepository(Task);
      const statusCounts = await taskRepository
        .createQueryBuilder('task')
        .select('task.status', 'status')
        .addSelect('COUNT(task.id)', 'count')
        .where({
          user: { id: authenticatedUser.id },
          deleted_at: IsNull(),
        })
        .groupBy('task.status')
        .getRawMany();

      const statusCountMap = statusCounts.reduce((acc, { status, count }) => {
        acc[status] = count;
        return acc;
      }, {});

      return res.status(200).json({ statusCounts: statusCountMap });
    } catch (error) {
      console.error('Erro ao obter contagem de tarefas por status:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  static async getAllTasks(req: Request, res: Response) {
    try {
      const tasks = await getRepository(Task).find();
      return res.status(200).json({ tasks });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}
