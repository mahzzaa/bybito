export async function load({ fetch }) {
  const spot_url = "https://api-testnet.bybit.com/v5/market/tickers?category=spot";
  const spot_response = await fetch(spot_url);
  const spot_data = await spot_response.json();
  const spot_tickers = spot_data.result.list;
  console.log(spot_tickers);

  const linear_url = "https://api-testnet.bybit.com/v5/market/tickers?category=linear";
  const linear_response = await fetch(linear_url);
  const linear_data = await linear_response.json();
  const linear_tickers = linear_data.result.list;
  console.log(linear_tickers);

  const limitedSpotTickers = spot_tickers.slice(0, 10);
  const limitedLinearTickers = linear_tickers.slice(0, 10);


  return {
    spotTickers: limitedSpotTickers,
    linearTickers: limitedLinearTickers,

  };
}