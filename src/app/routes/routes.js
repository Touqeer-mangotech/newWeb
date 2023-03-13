import LandingPage from "../views/LandingPage/LandingPage";
import Order from "../views/Order/Order";
import OrderAddress from "../views/Order/OrderAddress";
import Prescription from "../views/Prescription/Prescription";
import RequestMedication from "../views/RequestMedication/RequestMedication";
import Login from './../views/Auth/Login';
import SignUp from './../views/Auth/SignUp';
import Home from './../views/Home/Home';


const WebRoutes = [
  {
    path: '/',
    component: <LandingPage />
  },
  {
    path: '/login',
    component: <Login />
  }, {
    path: '/sign-up',
    component: <SignUp />
  },
  {
    path: '/home',
    component: <Home />
  },
  {
    path: '/prescription',
    component: <Prescription />
  },
  {
    path: '/request-medication',
    component: <RequestMedication />
  },
  {
    path: '/orders',
    component: <Order />
  },
  {
    path: '/order-address',
    component: <OrderAddress />
  },
]

export default WebRoutes