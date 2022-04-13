import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import StartOnDate from './OnDate';
import useStyles from '../../styles';

const Start = ({
  id,
  start: {
    onDate,
  },
  handleChange,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <StartOnDate id={id} onDate={onDate} handleChange={handleChange} />
    </div>
  );
};

Start.propTypes = {
  id: PropTypes.string.isRequired,
  start: PropTypes.shape({
    onDate: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Start;
