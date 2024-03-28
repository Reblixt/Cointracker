import { RouterProvider } from "react-router";
import "./App.scss";
import { router } from "./Router";
import { useState } from "react";
import { CoinContext, ICoinContext } from "./context/CoinsContext";

function App() {
  const [state, setState] = useState<ICoinContext>({
    coinList: [],
  });

  return (
    <>
      <CoinContext.Provider value={state}>
        <RouterProvider router={router} />
      </CoinContext.Provider>
    </>
  );
}

export default App;
