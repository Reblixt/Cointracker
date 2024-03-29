export class CoinClass {
  id: number;
  name: string;
  symbol: string;
  price: number;
  market_cap: number;
  circulatingSupply: number;
  logo: string;
  price_change_24h: number;
  rank: number;

  constructor(
    id: number,
    name: string,
    symbol: string,
    price: number,
    market_cap: number,
    circulatingSupply: number,
    logo: string,
    price_change_24h: number,
    rank: number,
  ) {
    this.id = id;
    this.name = name;
    this.symbol = symbol;
    this.price = price;
    this.market_cap = market_cap;
    this.circulatingSupply = circulatingSupply;
    this.logo = logo;
    this.price_change_24h = price_change_24h;
    this.rank = rank;
  }
}
