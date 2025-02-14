import { createRoot } from 'react-dom/client'
import './Main.scss'
import './i18n'
import Routes from './Routes/Routes'
import Store from './Store/Store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

const Router = createBrowserRouter(Routes);

createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <RouterProvider router={Router} />
  </Provider>
)