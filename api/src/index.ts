import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { userRouter } from './routes/user.routes';
import { taskRouter } from './routes/task.routes';

(async () => {
  await createConnection();

  const app = express();
  app.use(
    cors({
      origin: 'http://localhost:8080',
      credentials: true,
    })
  );

  app.use(express.json());

  // Rotas para o UserController
  app.use("/user", userRouter);

  // Rotas para o TaskController
  app.use("/tasks", taskRouter);

  app.get('/', (req, res) => {
    return res.json('Established connection!');
  });

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
})();
