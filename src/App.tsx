import { RouterProvider } from "react-router";
import "./App.scss";
import { router } from "./Router";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
