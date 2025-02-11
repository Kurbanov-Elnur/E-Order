import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';

import './App.scss'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className={'main-content'}>
        <Outlet />
      </div>
    </div>
  )
}

export default App;