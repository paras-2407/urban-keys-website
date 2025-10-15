// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
// import './index.css';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import HomePage from './pages/HomePage'; // Import the new HomePage
// import Properties from './components/Properties'; 
import PropertyDetail from './components/PropertyDetail';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App is the layout shell
    children: [
      {
        index: true, // This makes HomePage the default page
        element: <HomePage />,
      },
      {
        path: "properties/:id",
        element: <PropertyDetail />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);