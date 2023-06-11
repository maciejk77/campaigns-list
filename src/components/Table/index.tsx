import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import campaigns from '../../data.json';
import { ICampaign } from '../../../interfaces';
import { CampaignsContext } from '../..';

function createData(
  id: number,
  name: string,
  startDate: string,
  endDate: string,
  Budget: number
) {
  return { id, name, startDate, endDate, Budget };
}

export default function BasicTable() {
  const { keyword } = React.useContext(CampaignsContext);

  const rows = campaigns.reduce(
    (acc: ICampaign[], { id, name, startDate, endDate, Budget }: ICampaign) => {
      return [...acc, createData(id, name, startDate, endDate, Budget)];
    },
    []
  );

  let filteredRows: any;

  if (!keyword) {
    filteredRows = rows;
  } else {
    filteredRows = rows.filter(({ name }: any) =>
      name?.toLowerCase().includes(keyword?.toLowerCase())
    );
  }

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
          {filteredRows.map((row: ICampaign) => (
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
