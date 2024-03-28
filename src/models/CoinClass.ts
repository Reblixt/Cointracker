export class CoinClass {
  name: string;
  symbol: string;
  price: number;
  marketCap: number;
  circulatingSupply: number;
  image: string;

  constructor(
    name: string,
    symbol: string,
    price: number,
    marketCap: number,
    circulatingSupply: number,
    image: string,
  ) {
    this.name = name;
    this.symbol = symbol;
    this.price = price;
    this.marketCap = marketCap;
    this.circulatingSupply = circulatingSupply;
    this.image = image;
  }
}
