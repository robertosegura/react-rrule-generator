import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import RepeatMonthlyOn from './On';
import RepeatMonthlyOnThe from './OnThe';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import useStyles from '../../../styles';

const RepeatMonthly = ({
  id,
  monthly: {
    mode,
    interval,
    on,
    onThe,
    options,
  },
  handleChange,
}) => {
  const classes = useStyles();
  const isTheOnlyOneMode = option => options.modes === option;
  const isOptionAvailable = option => !options.modes || isTheOnlyOneMode(option);

  return (
    <Grid container direction="column">
      <div className={classes.container}>
        <div className={classes.input}>
          <TextField
            id={`${id}-interval`}
            name="repeat.monthly.interval"
            type="number"
            value={interval}
            label="Every"
            inputProps={{ min: 1 }}
            onChange={numericalFieldHandler(handleChange)}
            fullWidth
          />
        </div>
        <Box p={3}>
          <Typography component="span">month(s)</Typography>
        </Box>
      </div>
      <Grid container direction="column">
        {isOptionAvailable('on') && (
          <RepeatMonthlyOn
            id={`${id}-on`}
            mode={mode}
            on={on}
            hasMoreModes={!isTheOnlyOneMode('on')}
            handleChange={handleChange}
          />
        )}
        {isOptionAvailable('on the') && (
          <RepeatMonthlyOnThe
            id={`${id}-onThe`}
            mode={mode}
            onThe={onThe}
            hasMoreModes={!isTheOnlyOneMode('on the')}
            handleChange={handleChange}
          />
        )}
      </Grid>
    </Grid>
  );
};

RepeatMonthly.propTypes = {
  id: PropTypes.string.isRequired,
  monthly: PropTypes.shape({
    mode: PropTypes.oneOf(['on', 'on the']).isRequired,
    interval: PropTypes.number.isRequired,
    on: PropTypes.object.isRequired,
    onThe: PropTypes.object.isRequired,
    options: PropTypes.shape({
      modes: PropTypes.oneOf(['on', 'on the']),
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatMonthly;
