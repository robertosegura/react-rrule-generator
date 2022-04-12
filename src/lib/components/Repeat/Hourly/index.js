import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

const RepeatHourly = ({
  id,
  hourly: {
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
      name="repeat.hourly.interval"
      required
      type="number"
      value={interval}
      label="Hours"
      inputProps={{ min: 1 }}
      onChange={numericalFieldHandler(handleChange)}
    />
    <div className="col-sm-1">
      hours
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
