
import Order from '../views/Order/Order';
import Prescription from '../views/Prescription/Prescription';
import RequestMedication from '../views/RequestMedication/RequestMedication';
import Home from './../views/Home/Home';


const PrivateRoutes = [
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
];

export default PrivateRoutes;