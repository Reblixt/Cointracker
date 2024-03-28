export class CoinClass {
  id: number;
  name: string;
  symbol: string;
  price: number;
  market_cap: number;
  circulatingSupply: number;
  logo: string;

  constructor(
    id: number,
    name: string,
    symbol: string,
    price: number,
    market_cap: number,
    circulatingSupply: number,
    logo: string,
  ) {
    this.id = id;
    this.name = name;
    this.symbol = symbol;
    this.price = price;
    this.market_cap = market_cap;
    this.circulatingSupply = circulatingSupply;
    this.logo = logo;
  }
}
