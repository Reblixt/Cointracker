import { useContext, useEffect, useState } from "react";
import { ListCoins } from "../components/ListCoins";
import { Link } from "react-router-dom";
import { CoinContext } from "../context/CoinsContext";
import { ModalCoins } from "../components/ModalCoins";
import { debounce } from "../service/debounce";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [filteredCoins, setFilteredCoins] = useState([]);
  const { coinList } = useContext(CoinContext);

  const updateSearch = debounce((searchTerm: string) => {
    if (searchTerm.length > 0) {
      const matchedCoins = coinList.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredCoins(matchedCoins);
    } else {
      setFilteredCoins([]);
    }
  }, 500);

  useEffect(() => {
    updateSearch(search);
  }, [search]);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a coin"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Link to={`/coins/${search}`}>Search</Link>
      </div>

      {filteredCoins.length > 0 && <ModalCoins filteredCoins={filteredCoins} />}

      <h1>Top 100 coins by market cap</h1>
      <ul className="trending-coins">
        <ListCoins />
      </ul>
    </>
  );
};
