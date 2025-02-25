import App from '../App';
import AboutBrands from '../Pages/AboutBrands/AboutBrands';
import Auth from '../Pages/Auth/Auth';
import ECatalog from '../Pages/E-Catalog/E-Catalog';
import Info from '../Pages/Info/Info';
import Marketplace from '../Pages/Marketplace/Marketplace';
import OrderHistory from '../Pages/OrderHistory/OrderHistory';
import PromotionsAnnouncements from '../Pages/PromotionsAnnouncements/PromotionsAnnouncements';
import ShoppingCart from '../Pages/ShoppingCart/ShoppingCart';
import PrivateRoute from './PrivateRoute';

const isAuthenticated = true;
const hasPermission = true;

const appRoutes = [
    {
        path: 'marketplace',
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
        element: <PromotionsAnnouncements />,
    },
    {
        path: 'about-brands',
        element: <AboutBrands />,
    },
    {
        path: 'e-catalog',
        element: <ECatalog />,
    },
    {
        path: 'information',
        element: <Info />,
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