import React, { createContext, useContext, useEffect, useState } from 'react';

const Crypto = createContext();
const CryptoContext = ({ children }) => {
  // to set state for currency and symbol in app
  const [currency, setCurrency] = useState('AUD');
  const [symbol, setSymbol] = useState('$');

  useEffect(() => {
    if (currency === 'AUD') setSymbol('$');
    else if (currency === 'USD') setSymbol('$');
  }, [currency]);
  // set all currency into app using value
  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
