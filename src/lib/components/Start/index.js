import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import StartOnDate from './OnDate';

const Start = ({
  id,
  start: {
    onDate,
  },
  handleChange,
}) => (
  <Grid container>
    {/* <Grid item xs={2}>
      <Box p={3} style={{ paddingLeft: 0 }}>
        <Typography component="span">Start Date</Typography>
      </Box>
    </Grid> */}
    <Grid item>
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
