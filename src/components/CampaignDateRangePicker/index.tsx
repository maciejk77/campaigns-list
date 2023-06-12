import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material';
import { CampaignsContext } from '../..';
import dayjs from 'dayjs';

export default function CampaignDateRangePicker() {
  const { startDate, setStartDate, endDate, setEndDate } =
    React.useContext(CampaignsContext);

  const formatDate = (
    date: string | number | Date | dayjs.Dayjs | null | undefined
  ) => dayjs(date).format('M/DD/YYYY');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <Box sx={{ display: 'flex', marginY: 1 }}>
          <DatePicker
            sx={{ width: 1 / 4, marginX: 1 }}
            defaultValue={startDate}
            onChange={(newValue: any) => {
              setStartDate(formatDate(newValue));
            }}
            label="Start Date"
          />
          <DatePicker
            sx={{ width: 1 / 4, marginX: 1 }}
            defaultValue={endDate}
            onChange={(newValue: any) => setEndDate(formatDate(newValue))}
            label="End Date"
          />
        </Box>
      </DemoContainer>
    </LocalizationProvider>
  );
}
