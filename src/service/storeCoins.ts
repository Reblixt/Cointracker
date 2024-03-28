import axios from "axios";

const apiKey = "api=df3bfdc7-22ac-4efd-92c8-61b0f1e87585";

export const settings = {
  GETALLDATA_URL: `https://api.mobula.io/api/1/all?${apiKey}&fields=id%2Csymbol%2Clogo%2Cname%2Cmarket_cap%2Cblockchains%2Cwebsite%2Cprice%2Cprice_change_24h`,
  METADATA_URL: `https://api.mobula.io/api/1/metadata?${apiKey}&asset=`,
  TRENDING_UPL: `https://api.mobula.io/api/1/metadata/trendings?${apiKey}`,
  SEARCH_URL: `https://api.mobula.io/api/1/search?${apiKey}&input=`,
  GET_ALL_URL: `https://api.mobula.io/api/1/all?${apiKey}&fields=`,
  GET_CARLS_FAV_URL: `https://api.mobula.io/api/1/market/multi-data?${apiKey}&assets=flux%2Cbitcoin%2Cethereum%2Cchainlink%2Cpolygon%2Ckadena%2Cconstellation%2Cbiometricfinancial`,
};

export const getData = async (url: string, option?: string) => {
  const data = await axios.get(`${url}${option ? option : ""}}`);
  if (data.data === 0) return;
  const slicedData = data.data.slice(0, 20);
  const filteredData = slicedData.filter(
    (coin: any) => coin.id && coin.logo !== null,
  );
  return filteredData;
};

export const getCoinData = async (
  url: string,
  coin?: string,
  blockchain?: string,
) => {
  const response = await axios.get(`${url}${coin}&blockchain=${blockchain}`);
  return response.data.data;
};

export const getCarlFav = async () => {
  const response = await axios.get(settings.GET_CARLS_FAV_URL);
  return response.data;
};

export const getAllData = async () => {
  const response = await axios.get(settings.GETALLDATA_URL);
  const filteredData = response.data.data.filter(
    (coins: any) => coins.market_cap !== 0,
  );
  const sortedData = filteredData.sort(
    (a: any, b: any) => b.market_cap - a.market_cap,
  );
  const websiteData = sortedData.filter((coins: any) => coins.website !== null);
  return websiteData;
};
