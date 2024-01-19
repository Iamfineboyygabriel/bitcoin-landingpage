import React, { useEffect, useState } from "react";

export default function TokenCard({ id }) {
  const [tokenData, setTokenData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data for coin with ID ${id}`);
        }

        const data = await response.json();
        console.log("Data", data);
        setTokenData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setIsLoading(false);
      }
    };

    fetchTokenData();
  }, [id]);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="token-container">
      {tokenData && (
        <>
          <div className="token-info">
            <img className="token-logo" src={tokenData.image.small} />
            <div className="token-title-container">
              <span className="token-title">{tokenData.name}</span>
              <span className="token-title-long">
                {tokenData.asset_platform_id}
              </span>
            </div>
          </div>
          <div className="token-amount-container">
            <div className="token-amount">10</div>
            <div className="token-amount-long">
              <div className="token-price">
                {tokenData.market_data.current_price.usd}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
