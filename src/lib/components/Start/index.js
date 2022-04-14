import React from 'react';
import PropTypes from 'prop-types';
import StartOnDate from './OnDate';
import useStyles from '../../styles';

const Start = ({
  id,
  start: {
    onDate,
  },
  handleChange,
  readOnly,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <StartOnDate id={id} onDate={onDate} handleChange={handleChange} readOnly={readOnly} />
    </div>
  );
};

Start.propTypes = {
  id: PropTypes.string.isRequired,
  start: PropTypes.shape({
    onDate: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
};

export default Start;
