import { Application } from 'express';
import userRoutes from '~/features/user/routes/user.route';

function appRoutes(app: Application) {
  app.use('/api/v1/users', userRoutes);
}

export default appRoutes;
