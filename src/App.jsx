import { SendMoney } from './pages/sendMoney';
import { Signin } from './pages/signin';
import { Signup } from './pages/signup';
import { Dashboard } from './pages/dashboard';

import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/signin",
    element: <Signin/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/send",
    element: <SendMoney/>
  },
]);

export default function App(){
  return <RouterProvider router={router} />;
}
