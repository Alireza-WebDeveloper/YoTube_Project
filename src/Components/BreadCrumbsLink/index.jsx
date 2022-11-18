import React from 'react';
import { Breadcrumbs } from '@mui/material';
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
/**
 *
 * @param {*} param0 = Array Of Links['..','...','...']
 * @returns
 */
const BreadCrumbsLink = ({ ListOfLinks }) => {
  const classes = useStyles();
  /**
   *
   * @returns Render List Of Link
   */
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
    <Breadcrumbs
      className={'BreadCrumbs_Link'}
      aria-label="breadcrumb"
      separator="›"
      p={2}
    >
      {renderLinks()}
    </Breadcrumbs>
  );
};

export default React.memo(BreadCrumbsLink);
