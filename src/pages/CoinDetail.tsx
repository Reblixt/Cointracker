import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCoinData, settings } from "../service/storeCoins";
import { Link } from "react-router-dom";

interface Coin {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  market_cap: number;
  circilating_supply: number;
  description: string;
  website: string;
  blockchains: string[];
}

export const CoinDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [coin, setCoin] = useState<Coin | undefined>(undefined);

  useEffect(() => {
    const getCoin = async () => {
      const data: Coin = await getCoinData(settings.METADATA_URL, id);
      setCoin(data);
    };
    if (id) {
      getCoin();
    } else {
      return;
    }
  }, []);
  console.log(coin);

  return (
    <div className="coin-detail-container">
      <h1>
        {coin?.name} ({coin?.symbol})
      </h1>
      <img src={coin?.logo} alt={coin?.name} />
      <p>Description {coin?.description}</p>
      <p>Price: {coin?.price} USD</p>
      <p>Market Cap {coin?.market_cap}</p>
      <p>Circulation {coin?.circilating_supply}</p>
      {coin?.website ? (
        <Link to={coin?.website}>Visit website</Link>
      ) : (
        <p>Website not available</p>
      )}
      <ul>
        <h2>This token exist on these Blockchains</h2>
        {coin?.blockchains.map((chain, index) => <li key={index}>{chain}</li>)}
      </ul>
    </div>
  );
};
