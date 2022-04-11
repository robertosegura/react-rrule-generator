import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import numericalFieldHandler from '../../../utils/numericalFieldHandler';
// import translateLabel from '../../../utils/translateLabel';

const RepeatDaily = ({
  id,
  daily: {
    interval,
  },
  handleChange,
  // translations
}) => (
  <div className="form-group row d-flex align-items-sm-center">
    <div className="col-sm-1 offset-sm-2">
      every
    </div>
    {/* <div className="col-sm-2">
      <input
        id={`${id}-interval`}
        name="repeat.daily.interval"
        aria-label="Repeat daily interval"
        className="form-control"
        value={interval}
        onChange={numericalFieldHandler(handleChange)}
      />
    </div> */}
    <TextField
      name="repeat.daily.interval"
      required
      type="number"
      value={interval}
      label="Days"
      // id="zipcode"
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
  // translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RepeatDaily;
