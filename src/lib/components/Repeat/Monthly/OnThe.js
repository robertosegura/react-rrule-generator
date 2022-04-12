import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { DAYS } from '../../../constants/index';

const RepeatMonthlyOnThe = ({
  id,
  mode,
  onThe,
  hasMoreModes,
  handleChange,
}) => {
  const isActive = mode === 'on the';

  return (
    <div className={`form-group row d-flex align-items-sm-center ${!isActive && 'opacity-50'}`}>
      <div className="col-sm-1 offset-sm-2">
        {hasMoreModes && (
          <FormControlLabel
            id={id}
            name="repeat.monthly.mode"
            value="on the"
            control={<Radio color="primary" />}
            label="on the"
            checked={isActive}
            onChange={handleChange}
          />
        )}
      </div>

      <FormControl>
        <InputLabel id={`${id}-which-label`}>Occurrence</InputLabel>
        <Select
          id={`${id}-which`}
          labelId={`${id}-which-label`}
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

      <FormControl>
        <InputLabel id={`${id}-day-label`}>Day</InputLabel>
        <Select
          id={`${id}-day`}
          labelId={`${id}-day-label`}
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
};

export default RepeatMonthlyOnThe;
