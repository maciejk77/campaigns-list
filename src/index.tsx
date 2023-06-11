import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Table from './components/Table';
import NavSearchBar from './components/NavSearchBar';
// import data from '../src/data.json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

interface ICampaignsContextValue {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  campaigns: string;
  setCampaigns: React.Dispatch<React.SetStateAction<string>>;
}

export const CampaignsContext = createContext<any>(null);

export const CampaignsProvider = ({ children }: { children: any }) => {
  // const [campaigns, setCampaigns] = useState([]);
  const [keyword, setKeyword] = useState();

  return (
    <CampaignsContext.Provider
      value={{
        keyword,
        setKeyword,
        // campaigns,
        // setCampaigns,
      }}
    >
      {children}
    </CampaignsContext.Provider>
  );
};

root.render(
  <React.StrictMode>
    <CampaignsProvider>
      <NavSearchBar />
      <Table />
    </CampaignsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
