import { lazy } from 'react';

const SignupPage = lazy(() => import('./pages/auth/Signup'));
const LoginPage = lazy(() => import('./pages/auth/Login'));
const QuestionnairePage = lazy(() => import('./pages/Questionnaire'));

const coreRoutes = [
  {
    path: '/sign-up',
    title: 'SignUp',
    component: SignupPage,
  },
  {
    path: '/login',
    title: 'Login',
    component: LoginPage,
  },
  {
    path: '/questionnaire',
    title: 'Questionnaire',
    component: QuestionnairePage,
  },
];

const routes = [...coreRoutes];

export const exceptionRoutes = [
  {
    categoryId: 3,
    appId: 70,
    localRoute: '/say-thank-you',
  },
]; // routes that are exceptions and should be redirected to a different route, e.g. /app/70 should be redirected to /say-thank-you

export default routes;
