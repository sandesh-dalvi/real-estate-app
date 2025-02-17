import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./page/homePage/HomePage";

import ListPage from "./page/listPage/ListPage";
import Layout from "./page/layout/Layout";
import SinglePage from "./page/singlePage/SinglePage";
import Login from "./page/login/Login";
import ProfilePage from "./page/profile/ProfilePage";
import Register from "./page/register/Register";

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
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
