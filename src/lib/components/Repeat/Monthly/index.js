import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import RepeatMonthlyOn from './On';
import RepeatMonthlyOnThe from './OnThe';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

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
  const isTheOnlyOneMode = option => options.modes === option;
  const isOptionAvailable = option => !options.modes || isTheOnlyOneMode(option);

  return (
    <div>
      <div>
        <div>
          <TextField
            id={`${id}-interval`}
            name="repeat.monthly.interval"
            type="number"
            value={interval}
            label="Every"
            inputProps={{ min: 1 }}
            onChange={numericalFieldHandler(handleChange)}
          />
        </div>
        <div>
          <Box p={3}>
            <Typography component="span">month(s)</Typography>
          </Box>
        </div>
      </div>
      <div>
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
      </div>
    </div>
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
