import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import StartOnDate from './OnDate';

const Start = ({
  id,
  start: {
    onDate,
  },
  handleChange,
}) => (
  <Grid container>
    <Grid item xs={6}>
      <StartOnDate id={id} onDate={onDate} handleChange={handleChange} />
    </Grid>
  </Grid>
);

Start.propTypes = {
  id: PropTypes.string.isRequired,
  start: PropTypes.shape({
    onDate: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Start;
