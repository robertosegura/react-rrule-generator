import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';
// import translateLabel from '../../../utils/translateLabel';

const RepeatMonthlyOn = ({
  id,
  mode,
  on,
  hasMoreModes,
  handleChange,
  // translations
}) => {
  const isActive = mode === 'on';

  return (
    <div className={`form-group row d-flex align-items-sm-center ${!isActive && 'opacity-50'}`}>
      <div className="col-sm-1 offset-sm-2">
        {hasMoreModes && (
          // <input
          //   id={id}
          //   type="radio"
          //   name="repeat.monthly.mode"
          //   aria-label="Repeat monthly on"
          //   value="on"
          //   checked={isActive}
          //   onChange={handleChange}
          // />
          <FormControlLabel
            name="repeat.monthly.mode"
            value="on"
            control={<Radio color="primary" />}
            label="on day"
            checked={isActive}
            onChange={handleChange}
          />
        )}
      </div>
      {/* <div className="col-sm-1">
        {translateLabel(translations, 'repeat.monthly.on_day')}
      </div> */}

      {/* <div className="col-sm-2">
        <select
          id={`${id}-day`}
          name="repeat.monthly.on.day"
          aria-label="Repeat monthly on a day"
          className="form-control"
          value={on.day}
          disabled={!isActive}
          onChange={numericalFieldHandler(handleChange)}
        >
          {[...new Array(31)].map((day, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
        </select>
      </div> */}
      <FormControl>
        <InputLabel id="repeat-monthly-day-select-label">Day</InputLabel>
        <Select
          labelId="repeat-monthly-day-select-label"
          id="repeat-monthly-day-select"
          name="repeat.monthly.on.day"
          value={on.day}
          disabled={!isActive}
          onChange={numericalFieldHandler(handleChange)}
        >
          {[...new Array(31)].map((day, i) => <MenuItem key={`repeat-montly-day-${i + 1}`} value={i + 1}>{i + 1}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
};
RepeatMonthlyOn.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  on: PropTypes.shape({
    day: PropTypes.number.isRequired,
  }).isRequired,
  hasMoreModes: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  // translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RepeatMonthlyOn;
