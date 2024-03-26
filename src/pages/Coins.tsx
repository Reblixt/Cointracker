import { useEffect, useState } from "react";
import { getCarlFav } from "../service/storeCoins";

interface Coin {
  name: string;
  symbol: string;
  logo: string;
  price: number;
  rank: number;
  market_cap: number;
  price_change_24h: number;
}

export const Coins = () => {
  const [favCoins, setFavCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const getFav = async () => {
      const response = await getCarlFav();
      const coins = Object.values(response.data) as Coin[];
      setFavCoins(coins);
    };
    getFav();
  }, []);
  console.log(favCoins);

  return (
    <div className="fav-container">
      <h1>Carl's favorite coins</h1>

      <div className="fav-coins-container">
        {favCoins.map((coin) => {
          return (
            <div key={coin?.rank}>
              <h2>
                {coin?.name} ({coin?.symbol})
              </h2>
              <img src={coin?.logo} alt={coin?.name} />
              <p>Price {coin?.price} USD</p>
              <p>Rank in Market Cap {coin?.rank}</p>
              <p>Market Cap {coin?.market_cap} USD </p>
              <p>Price change last 24H {coin?.price_change_24h}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
