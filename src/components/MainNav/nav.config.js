import AdminDashboardPg from '../../views/AdminDashboardPg/AdminDashboardPg';
import ForgotPassPg from '../../views/ForgotPassPg/ForgotPassPg';
import HomePg from '../../views/HomePg/HomePg';
import LoginPg from '../../views/LoginPg/LoginPg';
import ProfilePg from '../../views/ProfilePg/ProfilePg';
import ProgramCreatePg from '../../views/ProgramCreatePg/ProgramCreatePg';
import ProgramOverviewPg from '../../views/ProgramOverviewPg/ProgramOverviewPg';
import ProgramsPg from '../../views/ProgramsPg/ProgramsPg';
import RegisterPg from '../../views/RegisterPg/RegisterPg';
import UserCreatePg from '../../views/UserCreatePg/UserCreatePg';
import UserDetailPg from '../../views/UserDetailPg/UserDetailPg';
import UsersPg from '../../views/UsersPg/UsersPg';

const navConfig = [
  {
    text: 'Home',
    path: '/',
    component: HomePg,
    access: 1,
  },
  {
    text: 'Programs',
    path: '/programs',
    access: 1,
    component: ProgramsPg,
  },
  {
    text: 'Overview',
    path: '/programs/:id/overview',
    access: 1,
    component: ProgramOverviewPg,
  },
  {
    text: 'Profile',
    path: '/profile',
    access: 1,
    component: ProfilePg,
  },
  {
    text: 'Dashboard',
    path: '/dashboard',
    access: 0,
    component: AdminDashboardPg,
  },
  {
    text: 'Create Program',
    path: '/program/create',
    access: 0,
    component: ProgramCreatePg,
  },
  {
    text: 'Users',
    path: '/users',
    access: 0,
    component: UsersPg,
  },
  {
    text: 'Users',
    path: '/users/:id/detail',
    access: 0,
    component: UserDetailPg,
  },
  {
    text: 'Create User',
    path: '/user/create',
    access: 0,
    component: UserCreatePg,
  },
  {
    text: 'Login',
    path: '/login',
    access: 0,
    component: LoginPg,
  },
  {
    text: 'Registration',
    path: '/registration',
    access: 0,
    component: RegisterPg,
  },
  {
    text: 'Forgot Password',
    path: '/forgot-password',
    access: 0,
    component: ForgotPassPg,
  },
];

export default navConfig;
