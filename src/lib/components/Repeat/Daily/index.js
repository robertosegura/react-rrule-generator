import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import useStyles from '../../../styles';

const RepeatDaily = ({
  id,
  daily: {
    interval,
  },
  handleChange,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.input}>
        <TextField
          id={`${id}-interval`}
          name="repeat.daily.interval"
          type="number"
          value={interval}
          label="Every"
          inputProps={{ min: 1 }}
          onChange={numericalFieldHandler(handleChange)}
          fullWidth
        />
      </div>
      <Box p={3}>
        <Typography component="span">day(s)</Typography>
      </Box>
    </div>
  );
};

RepeatDaily.propTypes = {
  id: PropTypes.string.isRequired,
  daily: PropTypes.shape({
    interval: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatDaily;
