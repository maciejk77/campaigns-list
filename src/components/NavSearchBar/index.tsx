import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { Search, SearchIconWrapper, StyledInputBase } from './styles';
import { CampaignsContext } from '../../index';
import { ICampaignsContextValue } from '../../interfaces';

export default function NavSearchBar() {
  const { keyword, setKeyword } =
    useContext<ICampaignsContextValue>(CampaignsContext);

  const handleChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setKeyword(value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Campaigns
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              defaultValue={keyword}
              onChange={handleChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
