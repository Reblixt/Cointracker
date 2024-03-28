import { RouterProvider } from "react-router";
import "./App.scss";
import { router } from "./Router";
import { useEffect, useState } from "react";
import { CoinContext, ICoinContext } from "./context/CoinsContext";
import { getAllData } from "./service/storeCoins";

function App() {
  const [state, setState] = useState<ICoinContext>({
    coinList: [],
  });
  useEffect(() => {
    const getData = async () => {
      let res = await getAllData();
      setState({ coinList: res });
    };
    getData();
  }, []);

  console.log(state);
  console.log(state.coinList);

  return (
    <>
      <CoinContext.Provider value={state}>
        <RouterProvider router={router} />
      </CoinContext.Provider>
    </>
  );
}

export default App;
