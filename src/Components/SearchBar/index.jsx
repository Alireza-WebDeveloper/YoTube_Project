import {  IconButton, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconClose, IconSearch } from '../../Utils';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  resized: {
    fontSize: 18,
  },
});
const SearchBar = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const updateQuery = (e) => {
    setQuery(e.target.value);
  };
  const clearQuery = () => {
    setQuery('');
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    navigate(`search/${query}`);
    setQuery('');
  };
  return (
    <Box
      onSubmit={handleSubmitForm}
      component={'form'}
      position={'relative'}
      display={'flex'}
      flexDirection={'row'}
      gap={2}
      className="searchBar"
    >
      <Box
        position={'relative'}
        flexGrow={1}
        className="searchBar_Input--Query"
      >
        <TextField
          color="secondary"
          InputProps={{
            classes: {
              input: classes.resized,
            },
          }}
          autoComplete="off"
          variant="standard"
          sx={{
            width: '100%',
          }}
          placeholder="Type to search"
          onChange={updateQuery}
          value={query}
        />

        {query ? (
          <IconButton
            className="searchBar_Clear--Query"
            onClick={clearQuery}
            sx={{
              position: 'absolute',
              right: 0,
              bottom: 5,
              transform: 'translateX(30%)',
            }}
          >
            {IconClose}
          </IconButton>
        ) : null}
      </Box>
      <Box>
        <IconButton className="searchBar_Submit--Query" type="submit">
          {IconSearch}
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchBar;
