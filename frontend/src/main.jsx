import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

// Estas son las rutas principales.
import Root from "./routes/root";
import Home from "./routes/home";
import ErrorPage from "./error-page";
import Project from "./routes/project";
import Portfolio from "./routes/portfolio";
import Index from "./routes/index";


const router = createBrowserRouter([

  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Portfolio />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/projects/:projectId",
            element: <Project />,
          },
          {
            index: true,
            element: <Index />
          },
        ]
      },
      {
        index: true,
        element: <Home />,
      },
    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)








