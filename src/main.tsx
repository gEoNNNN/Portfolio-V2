import App from './App.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import KitchenGuru from './pages/projects/KitchenGuru.tsx';
import ParkingGuru from './pages/projects/ParkingGuru.tsx';
import VintageVault from './pages/projects/VintageVault.tsx';
import COFFEEBOX from './pages/projects/COFFEEBOX.tsx'
import Casino from './pages/projects/CasinoGames.tsx'
import Lumeata from './pages/projects/Lumeata.tsx';
import Krovacoperisuri from './pages/projects/Krovacoperisuri.tsx';
import DigitalGrowSolutions from './pages/projects/DigitalGrowSolutions.tsx';
import NexaWorks from './pages/projects/NexaWorks.tsx';
import VocalliS from './pages/projects/VocalliS.tsx';
import ChallangeStore from './pages/projects/ChallangeStore.tsx';
import RParking from './pages/projects/RParking.tsx';
import RSistems from './pages/projects/RSistems.tsx';

const router = createBrowserRouter([
  { path: '', element: <App /> },
  { path: '/KitchenGuru', element: <KitchenGuru /> },
  { path: '/ParkingGuru', element: <ParkingGuru /> },
  { path: '/VintageVault', element: <VintageVault /> },
  { path: '/COFFEEBOX', element: <COFFEEBOX /> },
  { path: '/Casino', element: <Casino /> },
  { path: '/Lumeata', element: <Lumeata /> },
  { path: '/Krovacoperisuri', element: <Krovacoperisuri /> },
  { path: '/DigitalGrowSolutions', element: <DigitalGrowSolutions /> },
  { path: '/NexaWorks', element: <NexaWorks /> },
  { path: '/VocalliS', element: <VocalliS /> },
  { path: '/ChallangeStore', element: <ChallangeStore /> },
  { path: '/RParking', element: <RParking /> },
  { path: '/RSistems', element: <RSistems /> }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
