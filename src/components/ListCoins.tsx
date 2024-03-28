import { useContext } from "react";
import { Link } from "react-router-dom";
import { CoinContext } from "../context/CoinsContext";
import { ifCoinMillion } from "../service/CalculationFunctions";

export const ListCoins = () => {
  const { coinList } = useContext(CoinContext);

  return (
    <>
      {coinList.slice(0, 100).map((coin) => (
        <li key={coin.id}>
          <div>
            <img src={coin.logo} alt={coin.name} />
            <p>
              {" "}
              {coin.name}: ({coin.symbol})
            </p>
            <p>Price {coin.price.toFixed(4)} USD</p>
            <p>Market Cap {coin && ifCoinMillion(coin.market_cap)} USD</p>
          </div>
          <Link to={`/coins/${coin.name}`}>Läs mer...</Link>
        </li>
      ))}
    </>
  );
};
