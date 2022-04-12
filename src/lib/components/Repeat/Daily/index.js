import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

const RepeatDaily = ({
  id,
  daily: {
    interval,
  },
  handleChange,
}) => (
  <div className="form-group row d-flex align-items-sm-center">
    <div className="col-sm-1 offset-sm-2">
      every
    </div>
    <TextField
      id={`${id}-interval`}
      name="repeat.daily.interval"
      required
      type="number"
      value={interval}
      label="Days"
      inputProps={{ min: 1 }}
      onChange={numericalFieldHandler(handleChange)}
    />

  </div>
);
RepeatDaily.propTypes = {
  id: PropTypes.string.isRequired,
  daily: PropTypes.shape({
    interval: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatDaily;
