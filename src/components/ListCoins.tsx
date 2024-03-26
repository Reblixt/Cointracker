import { Link } from "react-router-dom";

interface Coin {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  price_change_24h: number;
}

export const ListCoins = ({ trending }: { trending: Coin[] }) => {
  return (
    <>
      {trending.map((coin: Coin) => (
        <li key={coin.id}>
          <div>
            <img src={coin.logo} alt={coin.name} />
            <p>
              {" "}
              {coin.name}: ({coin.symbol})
            </p>
            <p>{coin.price_change_24h}%</p>
          </div>
          <Link to={`/coins/${coin.name}`}>Läs mer...</Link>
        </li>
      ))}
    </>
  );
};
