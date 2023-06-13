import React, { useState, useEffect } from 'react';

function CurrencyConverter() {
  const [exchangeRate, setExchangeRate] = useState(0);
  const [amountFrom, setAmountFrom] = useState(0);
  const [amountTo, setAmountTo] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState('UAH');
  const [currencyTo, setCurrencyTo] = useState('USD');

  useEffect(() => {
    // Fetching the exchange rate from a public API
    fetch('https://api.example.com/exchange-rate')
      .then(response => response.json())
      .then(data => {
        setExchangeRate(data.rate);
      });
  }, []);

  const handleAmountFromChange = (e) => {
    const value = e.target.value;
    setAmountFrom(value);
    setAmountTo(value * exchangeRate);
  };

  const handleAmountToChange = (e) => {
    const value = e.target.value;
    setAmountTo(value);
    setAmountFrom(value / exchangeRate);
  };

  const handleCurrencyFromChange = (e) => {
    const value = e.target.value;
    setCurrencyFrom(value);
    setAmountTo(amountFrom * exchangeRate);
  };

  const handleCurrencyToChange = (e) => {
    const value = e.target.value;
    setCurrencyTo(value);
    setAmountFrom(amountTo / exchangeRate);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <p>Exchange Rate: 1 {currencyFrom} = {exchangeRate} {currencyTo}</p>
      </div>
      <div>
        <input type="number" value={amountFrom} onChange={handleAmountFromChange} />
        <select value={currencyFrom} onChange={handleCurrencyFromChange}>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div>
        <input type="number" value={amountTo} onChange={handleAmountToChange} />
        <select value={currencyTo} onChange={handleCurrencyToChange}>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    </div>
  );
}

export default CurrencyConverter;
