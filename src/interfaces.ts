import { Dispatch, SetStateAction } from 'react';

type TProps = string | null | undefined;
type TDispatch = Dispatch<SetStateAction<TProps>>;
export type TCampaigns = [] | ICampaign[];

export interface ICampaign {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  Budget: number;
}

export interface ICampaignsContextValue {
  keyword: TProps;
  setKeyword: TDispatch;
  campaigns: TCampaigns;
  setCampaigns: Dispatch<SetStateAction<TCampaigns>>;
  startDate: TProps;
  setStartDate: TDispatch;
  endDate: TProps;
  setEndDate: TDispatch;
}
