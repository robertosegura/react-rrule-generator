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

import { DAYS } from '../../../constants/index';
// import translateLabel from '../../../utils/translateLabel';

const RepeatMonthlyOnThe = ({
  id,
  mode,
  onThe,
  hasMoreModes,
  handleChange,
  // translations
}) => {
  const isActive = mode === 'on the';

  return (
    <div className={`form-group row d-flex align-items-sm-center ${!isActive && 'opacity-50'}`}>
      <div className="col-sm-1 offset-sm-2">
        {hasMoreModes && (
          // <input
          //   id={id}
          //   type="radio"
          //   name="repeat.monthly.mode"
          //   aria-label="Repeat monthly on the"
          //   value="on the"
          //   checked={isActive}
          //   onChange={handleChange}
          // />
          <FormControlLabel
            name="repeat.monthly.mode"
            value="on the"
            control={<Radio color="primary" />}
            label="on the"
            checked={isActive}
            onChange={handleChange}
          />
        )}
      </div>
      {/* <div className="col-sm-1">
        {translateLabel(translations, 'repeat.monthly.on_the')}
      </div> */}

      {/* <div className="col-sm-2">
        <select
          id={`${id}-which`}
          name="repeat.monthly.onThe.which"
          aria-label="Repeat monthly on the which"
          className="form-control"
          value={onThe.which}
          disabled={!isActive}
          onChange={handleChange}
        >
          <option value="First">{translateLabel(translations, 'numerals.first')}</option>
          <option value="Second">{translateLabel(translations, 'numerals.second')}</option>
          <option value="Third">{translateLabel(translations, 'numerals.third')}</option>
          <option value="Fourth">{translateLabel(translations, 'numerals.fourth')}</option>
          <option value="Last">{translateLabel(translations, 'numerals.last')}</option>
        </select>
      </div> */}

      <FormControl>
        <InputLabel id="repeat-monthly-occurrence-select-label">Occurrence</InputLabel>
        <Select
          labelId="repeat-monthly-occurrence-select-label"
          id="repeat-monthly-occurrence-select"
          name="repeat.monthly.onThe.which"
          value={onThe.which}
          disabled={!isActive}
          onChange={handleChange}
        >
          <MenuItem value="First">First</MenuItem>
          <MenuItem value="Second">Second</MenuItem>
          <MenuItem value="Third">Third</MenuItem>
          <MenuItem value="Fourth">Fourth</MenuItem>
          <MenuItem value="Last">Last</MenuItem>
        </Select>
      </FormControl>

      {/* <div className="col-sm-3">
        <select
          id={`${id}-day`}
          name="repeat.monthly.onThe.day"
          aria-label="Repeat monthly on the day"
          className="form-control"
          value={onThe.day}
          disabled={!isActive}
          onChange={handleChange}
        >
          {DAYS.map(day => <option key={day} value={day}>{translateLabel(translations, `days.${day.toLowerCase()}`)}</option>)}
        </select>
      </div> */}

      <FormControl>
        <InputLabel id="repeat-monthly-day-select-label">Day</InputLabel>
        <Select
          labelId="repeat-monthly-day-select-label"
          id="repeat-monthly-day-select"
          name="repeat.monthly.onThe.day"
          value={onThe.day}
          disabled={!isActive}
          onChange={handleChange}
        >
          {DAYS.map(day => <MenuItem key={day} value={day}>{day}</MenuItem>)}
        </Select>
      </FormControl>

    </div>
  );
};
RepeatMonthlyOnThe.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  onThe: PropTypes.shape({
    which: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last']).isRequired,
    day: PropTypes.oneOf(DAYS).isRequired,
  }).isRequired,
  hasMoreModes: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  // translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RepeatMonthlyOnThe;
