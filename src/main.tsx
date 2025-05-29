import App from './App.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import KitchenGuru from './pages/projects/KitchenGuru.tsx';
import ParkingGuru from './pages/projects/ParkingGuru.tsx';
import VintageVault from './pages/projects/VintageVault.tsx';
import COFFEEBOX from './pages/projects/COFFEEBOX.tsx'
import Casino from './pages/projects/CasinoGames.tsx'

const router = createBrowserRouter([
  { path: '', element: <App /> },
  { path: '/KitchenGuru', element: <KitchenGuru /> },
  { path: '/ParkingGuru', element: <ParkingGuru /> },
  { path: '/VintageVault', element: <VintageVault /> },
  { path: '/COFFEEBOX', element: <COFFEEBOX /> },
  { path: '/Casino', element: <Casino /> }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
