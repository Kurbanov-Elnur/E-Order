import App from '../App';
import Auth from '../Pages/Auth/Auth';

const appRoutes = [
    {
        path: 'auth',
        element: <Auth />
    }
];

const app = [
    {
        element: <App />,
        children: appRoutes
    },
    {
        path: '/',
        element: <Auth />
    }
]

export default app;