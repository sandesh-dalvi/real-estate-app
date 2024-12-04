import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./page/homePage/HomePage";

import ListPage from "./page/listPage/ListPage";
import Layout from "./page/layout/Layout";
import SinglePage from "./page/singlePage/SinglePage";
import Login from "./page/login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
