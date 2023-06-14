import React, { useContext } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material';
import { CampaignsContext } from '../..';
import dayjs from 'dayjs';

export default function CampaignDateRangePicker() {
  const { startDate, setStartDate, endDate, setEndDate } =
    useContext(CampaignsContext);

  const formatDate = (
    date: string | number | Date | dayjs.Dayjs | null | undefined
  ) => dayjs(date).format('MM/DD/YYYY');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <Box sx={{ display: 'flex', marginY: 1 }}>
          <DatePicker
            sx={{ width: 1 / 3, marginX: 1 }}
            defaultValue={startDate}
            onAccept={(newValue: string | null) => {
              setStartDate(formatDate(newValue));
            }}
            onChange={() => undefined}
            label="Start Date"
            slotProps={{
              actionBar: {
                actions: ['clear'],
                onClick: () => setStartDate(''),
              },
            }}
          />
          <DatePicker
            sx={{ width: 1 / 3, marginX: 1 }}
            defaultValue={endDate}
            onAccept={(newValue: string | null) => {
              setEndDate(formatDate(newValue));
            }}
            onChange={() => undefined}
            label="End Date"
            slotProps={{
              actionBar: {
                actions: ['clear'],
                onClick: () => setEndDate(''),
              },
            }}
          />
        </Box>
      </DemoContainer>
    </LocalizationProvider>
  );
}
