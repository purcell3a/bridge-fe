import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';
import './index.css'
import LandingPage from './Landingpage.jsx';
import Chatroom from './Chatroom.jsx';
import SymptomEntry from './SymptomEntry.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/landing_page",
    element: <LandingPage />,
  },
  {
    path: "/chatroom",
    element: <Chatroom />,
  },
  {
    path: "/symptoms",
    element: <SymptomEntry />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
