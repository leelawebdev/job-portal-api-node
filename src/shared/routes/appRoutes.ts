import { Application } from 'express';
import authRoutes from '~/features/auth/routes/auth.route';
import candidateProfileRoutes from '~/features/candidate-profile/routes/candidate-profile.route';
import userRoutes from '~/features/user/routes/user.route';

function appRoutes(app: Application) {
  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/candidate-profiles', candidateProfileRoutes);
}

export default appRoutes;
