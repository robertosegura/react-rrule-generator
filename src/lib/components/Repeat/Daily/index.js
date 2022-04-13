import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

const RepeatDaily = ({
  id,
  daily: {
    interval,
  },
  handleChange,
}) => (
  <Grid container>
    <Grid item>
      <TextField
        id={`${id}-interval`}
        name="repeat.daily.interval"
        type="number"
        value={interval}
        label="Every"
        inputProps={{ min: 1 }}
        onChange={numericalFieldHandler(handleChange)}
      />
    </Grid>
    <Grid item>
      <Box p={3}>
        <Typography component="span">day(s)</Typography>
      </Box>
    </Grid>
  </Grid>
);
RepeatDaily.propTypes = {
  id: PropTypes.string.isRequired,
  daily: PropTypes.shape({
    interval: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatDaily;
