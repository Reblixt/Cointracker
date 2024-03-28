import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCoinData, settings } from "../service/storeCoins";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ifCoinMillion } from "../service/CalculationFunctions";

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
  circulating_supply: number;
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
      <Card style={{ width: "40rem" }}>
        <Card.Img variant="top" src={coin?.logo} alt={coin?.name} />
        <Card.Body>
          <Card.Title>{coin?.name}</Card.Title>
          <Card.Text>{coin?.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price: {coin?.price.toFixed(2)} USD</ListGroup.Item>
          <ListGroup.Item>
            Market cap: {coin && ifCoinMillion(coin.market_cap)} USD
          </ListGroup.Item>
          <ListGroup.Item>
            In circulation {coin && ifCoinMillion(coin.circulating_supply)}{" "}
            Tokens
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          {coin?.website ? (
            <Card.Link href={coin?.website}>Website</Card.Link>
          ) : (
            <Card.Text>Website not available</Card.Text>
          )}
        </Card.Body>
      </Card>
      <ul>
        <h2>This token exist on these Blockchains</h2>
        {coin?.blockchains.map((chain, index) => <li key={index}>{chain}</li>)}
      </ul>
    </div>
  );
};
