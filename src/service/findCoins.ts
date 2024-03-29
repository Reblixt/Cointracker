import { useContext } from "react";
import { CoinContext } from "../context/CoinsContext";

const { coinList } = useContext(CoinContext);

export const createFavCoinList = (coinName: string) => {
  let favoriteCoin = coinList.find(
    (coin) => coin.name.toLowerCase() === coinName.trim().toLowerCase(),
  );
  if (!favoriteCoin) {
    favoriteCoin = coinList.find(
      (coin) => coin.symbol.toLowerCase() === coinName.trim().toLowerCase(),
    );
  }
  if (favoriteCoin) {
    return favoriteCoin;
  } else {
    console.log("Coin not found");
  }
};
