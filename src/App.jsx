import { SendMoney } from './components/sendMoney';
import { Signin } from './components/signin';
import { Signup } from './components/signup';
import { Dashboard } from './components/dashboard';

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
