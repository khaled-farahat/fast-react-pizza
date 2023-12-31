import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import { action as orderAction } from '@/features/order/UpdateOrder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: 'cart', element: <Cart /> },
      {
        path: 'order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: 'order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: orderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
