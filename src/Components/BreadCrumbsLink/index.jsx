import React from 'react';
import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    textTransform: 'capitalize',
    color: theme.palette.secondary.main,
    fontSize: '1.3rem',
  },
}));
const BreadCrumbsLink = ({ ListOfLinks }) => {
  const classes = useStyles();
  const renderLinks = () => {
    return ListOfLinks.map(({ name, to }, index) => {
      return (
        <Link className={classes.link} key={index} to={to}>
          {name}
        </Link>
      );
    });
  };
  return (
    <Breadcrumbs aria-label="breadcrumb" separator="›" p={2}>
      {renderLinks()}
    </Breadcrumbs>
  );
};

export default BreadCrumbsLink;
