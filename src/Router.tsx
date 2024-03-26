import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { Coins } from "./pages/Coins";
import { CoinDetail } from "./pages/CoinDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/coins", element: <Coins /> },
      { path: "/coins/:id", element: <CoinDetail /> },
    ],
  },
]);
