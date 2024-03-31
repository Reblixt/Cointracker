import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ModalCoins({ filteredCoins }: any) {
  const [show, setShow] = useState(false);
  const SearchCoins = (
    <ul className="searchContainer">
      {" "}
      <h2>Searched coins</h2>
      {filteredCoins.map((coin: any) => {
        return (
          <li key={coin.id}>
            <img src={coin.logo} alt={coin.name} width="20" height="20" />
            <p>{coin.name}</p>
            <Link to={`/coins/${coin.name}`}>Go to</Link>
          </li>
        );
      })}
    </ul>
  );

  useEffect(() => {
    if (filteredCoins.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [filteredCoins]);

  //const handleClose = () => setShow(false);

  return <>{show && SearchCoins}</>;
}
