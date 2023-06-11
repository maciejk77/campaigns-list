export interface ICampaign {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  Budget: number;
}

export interface IState {
  campaigns: ICampaign[];
}

export interface IAction {
  type: string;
  payload: ICampaign[];
}

export type Dispatch = React.Dispatch<IAction>;
