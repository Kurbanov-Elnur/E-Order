import App from '../App';
import Auth from '../Pages/Auth/Auth';
import Marketplace from '../Pages/Marketplace/Marketplace';
import OrderHistory from '../Pages/OrderHistory/OrderHistory';
import ShoppingCart from '../Pages/ShoppingCart/ShoppingCart';
import PrivateRoute from './PrivateRoute';

const isAuthenticated = true;
const hasPermission = true;

const appRoutes = [
    {
        path: 'search',
        element: <Marketplace />,
    },
    {
        path: 'shopping-cart',
        element: <ShoppingCart />,
    },
    {
        path: 'order-history',
        element: <OrderHistory />,
    },
    {
        path: 'messages',
        element: <Marketplace />,
    },
    {
        path: 'promotions-announcements',
        element: <Marketplace />,
    },
    {
        path: 'about-brands',
        element: <Marketplace />,
    },
    {
        path: 'e-catalog',
        element: <Marketplace />,
    },
    {
        path: 'information',
        element: <Marketplace />,
    },
    {
        path: 'outlet',
        element: <Marketplace />,
    }
];

const app = [
    {
        path: '/app',
        element: (
            <PrivateRoute
                isAuthenticated={isAuthenticated}
                hasPermission={hasPermission}
            >
                <App />
            </PrivateRoute>
        ),
        children: appRoutes
    },
    {
        path: '/',
        element: <Auth />,
    },
    {
        path: 'auth',
        element: <Auth />
    }
]

export default app;