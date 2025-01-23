import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/ui/Home";
import Menu from "./features/menu/Menu";
import {
  menuLoader,
  orderLoader,
  action,
} from "./features/services/apiRestaurant";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import "./index.css";
import Error from "./features/ui/Error";
import AppLayout from "./features/ui/AppLayout";
const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        { path: "/cart", element: <Cart /> },
        {
          path: "/order/new",
          element: <CreateOrder />,
          action: action,
          errorElement: <Error />,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
          loader: orderLoader,
          errorElement: <Error />,
        },
      ],
    },
  ],
  {}
);
const App = () => {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    />
  );
};

export default App;
