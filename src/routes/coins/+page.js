export async function load({ fetch }) {
  const url = "https://api-testnet.bybit.com/v5/market/tickers?category=spot";
  const response = await fetch(url);
  const data = await response.json();
  const tickers = data.result.list;
  console.log(tickers);
  const limitedSpotTickers = tickers.slice(0, 1000);

  return {
    limitedSpotTickers,

  };
}