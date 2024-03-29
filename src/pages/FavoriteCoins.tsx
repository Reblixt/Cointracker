import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ifCoinMillion } from "../service/CalculationFunctions";
import { CoinContext } from "../context/CoinsContext";
import { CoinClass } from "../models/CoinClass";

export const FavoriteCoins = () => {
  const [favCoins, setFavCoins] = useState<CoinClass[]>([]);
  const [search, setSearch] = useState<string>("");
  const { coinList } = useContext(CoinContext);

  const createFavCoinList = (searchTerm: string) => {
    let coinIndex = coinList.findIndex(
      (coin) => coin.name.toLowerCase() === searchTerm.trim().toLowerCase(),
    );

    if (coinIndex === -1) {
      coinIndex = coinList.findIndex(
        (coin) => coin.symbol.toLowerCase() === searchTerm.trim().toLowerCase(),
      );
    }

    if (coinIndex !== -1) {
      const favoriteCoin = { ...coinList[coinIndex], rank: coinIndex + 1 };
      setFavCoins((prevFavCoins) => [...prevFavCoins, favoriteCoin]);

      console.log(
        `${favoriteCoin.name} is number ${coinIndex + 1} in the list based on market cap.`,
      );
    } else {
      console.error("Coin not found with name or symbol:", searchTerm);
    }
  };

  return (
    <div className="fav-container">
      <h1>My favorite coins</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createFavCoinList(search);

          setSearch("");
        }}
      >
        <input
          type="text"
          placeholder="Add a coin"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button> Add Coin</button>
      </form>

      <div className="fav-coins-container">
        {favCoins.map((coin) => {
          return (
            <Card key={coin?.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={coin?.logo} alt={coin?.name} />
              <Card.Body>
                <Card.Title>{coin?.name}</Card.Title>
                <Card.Text>
                  Price: {coin && ifCoinMillion(coin.price)} USD
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  Market Cap: {coin && ifCoinMillion(coin.market_cap)}
                </ListGroup.Item>
                <ListGroup.Item>Rank: {coin?.rank}</ListGroup.Item>
                <ListGroup.Item>
                  Price Change last 24h {coin?.price_change_24h.toFixed(2)}%
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
