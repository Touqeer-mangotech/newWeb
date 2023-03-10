import LandingPage from "../views/LandingPage/LandingPage";
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

]

export default WebRoutes