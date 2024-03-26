import { useEffect, useState } from "react";
import { getData, settings } from "../service/storeCoins";
import { ListCoins } from "../components/ListCoins";
import { Link } from "react-router-dom";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      const data = await getData(settings.TRENDING_UPL);
      setTrending(data);
      console.log(data);
    };
    getTrending();
  }, []);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a coin"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to={`/coins/${search}`}>Search</Link>
      </div>

      <h1>Trending coins</h1>
      <ul className="trending-coins">
        <ListCoins trending={trending} />
      </ul>
    </>
  );
};
