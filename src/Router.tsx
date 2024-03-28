import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { FavoriteCoins } from "./pages/FavoriteCoins";
import { CoinDetail } from "./pages/CoinDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/favorite", element: <FavoriteCoins /> },
      { path: "/coins/:id", element: <CoinDetail /> },
    ],
  },
]);
