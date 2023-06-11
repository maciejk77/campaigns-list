import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import campaigns from './data.json';

type TCampaign = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  Budget: number;
};

function createData(
  id: number,
  name: string,
  startDate: string,
  endDate: string,
  Budget: number
) {
  return { id, name, startDate, endDate, Budget };
}

const rows = campaigns.reduce(
  (acc: TCampaign[], { id, name, startDate, endDate, Budget }: TCampaign) => {
    return [...acc, createData(id, name, startDate, endDate, Budget)];
  },
  []
);

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ margin: 5, maxWidth: '90%' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Start Date</TableCell>
            <TableCell align="left">End Date</TableCell>
            <TableCell align="left">Budget</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: TCampaign) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.startDate}</TableCell>
              <TableCell align="left">{row.endDate}</TableCell>
              <TableCell align="left">{row.Budget}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
