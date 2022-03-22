import React from "react";
import "./Coin.css";

const Coin = ({ image, name, symbol, price, volume, priceChange }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <p className="coin-name">{name}</p>
          <p className="coin-symbol">{symbol.toUpperCase()}</p>
        </div>

        <div className="coin-data">
          <p className="coin-price">R$ {price.toLocaleString()}</p>
          <p className="coin-volume">R$ {volume.toLocaleString()} </p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;
