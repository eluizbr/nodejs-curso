import { Router } from 'express';

import { login } from './login';
import { logout } from './logout';

export const accessRoutes = Router();

accessRoutes.get('/logout', logout).post('/login', login);
