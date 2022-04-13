import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

const RepeatHourly = ({
  id,
  hourly: {
    interval,
  },
  handleChange,
}) => (
  <div>
    <TextField
      id={`${id}-interval`}
      name="repeat.hourly.interval"
      required
      type="number"
      value={interval}
      label="Every"
      inputProps={{ min: 1 }}
      onChange={numericalFieldHandler(handleChange)}
    />
    <div>
      <Box p={3}>
        <Typography component="span">hour(s)</Typography>
      </Box>
    </div>
  </div>
);
RepeatHourly.propTypes = {
  id: PropTypes.string.isRequired,
  hourly: PropTypes.shape({
    interval: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatHourly;
