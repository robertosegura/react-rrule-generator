import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
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
      <div className="form-group row d-flex align-items-sm-center">
        <div className="col-sm-1 offset-sm-2">
          every
        </div>
        <TextField
          id={`${id}-interval`}
          name="repeat.monthly.interval"
          required
          type="number"
          value={interval}
          label="Every"
          inputProps={{ min: 1 }}
          onChange={numericalFieldHandler(handleChange)}
        />
        <div className="col-sm-1">
          months
        </div>
      </div>

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
