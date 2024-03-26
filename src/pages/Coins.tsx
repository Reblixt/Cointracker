import { useEffect, useState } from "react";
import { getCarlFav } from "../service/storeCoins";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

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
      <h1>My favorite coins</h1>

      <div className="fav-coins-container">
        {favCoins.map((coin) => {
          return (
            <Card key={coin?.rank} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={coin?.logo} alt={coin?.name} />
              <Card.Body>
                <Card.Title>{coin?.name}</Card.Title>
                <Card.Text>Price: {coin?.price} USD</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Market Cap: {coin?.market_cap}</ListGroup.Item>
                <ListGroup.Item>Rank: {coin?.rank}</ListGroup.Item>
                <ListGroup.Item>
                  Price Change last 24h {coin?.price_change_24h}%
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href={`/coins/${coin.name}`}>Read more</Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
