import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './ui/Home'
import Menu from './features/menu/Menu'
import { menuLoader } from './services/apiRestaurant'
import Cart from './features/cart/Cart'
import CreateOrder, {
    action as createNewOrder,
} from './features/order/CreateOrder'
import Order, { loader as orderLoader } from './features/order/Order'
import './index.css'
import { action as updateOrderAction } from './features/order/UpdateOrder'
import Error from './ui/Error'
import AppLayout from './ui/AppLayout'

const router = createBrowserRouter(
    [
        {
            element: <AppLayout />,
            errorElement: <Error />,
            children: [
                { path: '/', element: <Home /> },
                {
                    path: '/menu',
                    element: <Menu />,
                    loader: menuLoader,
                    errorElement: <Error />,
                },
                { path: '/cart', element: <Cart /> },
                {
                    path: '/order/new',
                    element: <CreateOrder />,
                    action: createNewOrder,
                    errorElement: <Error />,
                },
                {
                    path: '/order/:orderId',
                    element: <Order />,
                    loader: orderLoader,
                    errorElement: <Error />,
                    action: updateOrderAction,
                },
            ],
        },
    ],
    {}
)
const App = () => {
    return (
        <RouterProvider
            router={router}
            future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true,
            }}
        />
    )
}

export default App
