// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Layout from './Layout.jsx'; // Import the new Layout component
import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';
import LandingPage from './Landingpage.jsx';
import Chatroom from './Chatroom.jsx';
import SymptomEntry from './SymptomEntry.jsx';

const router = createBrowserRouter([
  {
    path: "/",   // Wrap with Layout component
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/chatroom", element: <Chatroom /> },
      { path: "/symptoms", element: <SymptomEntry /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
