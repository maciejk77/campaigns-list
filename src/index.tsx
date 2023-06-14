import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Table from './components/Table';
import NavSearchBar from './components/NavSearchBar';
import CampaignDateRangePicker from './components/CampaignDateRangePicker';
import data from '../src/data.json';
import { ICampaign } from '../interfaces';
import dayjs from 'dayjs';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

type TProps = string | null | undefined;
type TDispatch = Dispatch<SetStateAction<TProps>>;
type TCampaigns = [] | ICampaign[];

interface ICampaignsContextValue {
  keyword: TProps;
  setKeyword: TDispatch;
  campaigns: TCampaigns;
  setCampaigns: Dispatch<SetStateAction<TCampaigns>>;
  startDate: TProps;
  setStartDate: TDispatch;
  endDate: TProps;
  setEndDate: TDispatch;
}

export const CampaignsContext = createContext<ICampaignsContextValue>({
  keyword: '',
  setKeyword: () => {},
  campaigns: [],
  setCampaigns: () => {},
  startDate: '',
  setStartDate: () => {},
  endDate: '',
  setEndDate: () => {},
});

export const CampaignsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [campaigns, setCampaigns] = useState<ICampaign[] | []>([]);
  const [keyword, setKeyword] = useState<string | null>();
  const [startDate, setStartDate] = useState<string | null>();
  const [endDate, setEndDate] = useState<string | null>();

  const rows = useMemo(() => {
    function createData(
      id: number,
      name: string,
      startDate: string,
      endDate: string,
      Budget: number
    ) {
      return { id, name, startDate, endDate, Budget };
    }
    // formatting data for rendering in MUI table
    return data.reduce(
      (acc: ICampaign[], row: ICampaign) => [
        ...acc,
        createData(row.id, row.name, row.startDate, row.endDate, row.Budget),
      ],
      []
    );
  }, []);

  useEffect(() => {
    if (keyword) {
      const filteredData = rows.filter(({ name }: ICampaign) =>
        name?.toLowerCase().includes(keyword?.toLowerCase())
      );

      setCampaigns(filteredData);
    }
    return () => setCampaigns(rows);
    // eslint-disable-next-line
  }, [keyword]);

  useEffect(() => {
    if (startDate || endDate) {
      const filteredForDate = campaigns.filter(
        (row) =>
          dayjs(row.startDate) >= dayjs(startDate) &&
          dayjs(row.endDate) <= dayjs(endDate)
      );

      setCampaigns(filteredForDate);
    }
    return () => setCampaigns(rows);
    // eslint-disable-next-line
  }, [startDate, endDate]);

  return (
    <CampaignsContext.Provider
      value={{
        keyword,
        setKeyword,
        startDate,
        endDate,
        setStartDate,
        setEndDate,
        campaigns,
        setCampaigns,
      }}
    >
      {children}
    </CampaignsContext.Provider>
  );
};

root.render(
  <React.StrictMode>
    <CampaignsProvider>
      <NavSearchBar /> <CampaignDateRangePicker />
      <Table />
    </CampaignsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
