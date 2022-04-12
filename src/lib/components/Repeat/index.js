import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RepeatYearly from './Yearly/index';
import RepeatMonthly from './Monthly/index';
import RepeatWeekly from './Weekly/index';
import RepeatDaily from './Daily/index';
import RepeatHourly from './Hourly/index';


const Repeat = ({
  id,
  repeat: {
    frequency,
    yearly,
    monthly,
    weekly,
    daily,
    hourly,
    options,
  },
  handleChange,
  
}) => {
  const isOptionAvailable = option => !options.frequency || options.frequency.indexOf(option) !== -1;
  const isOptionSelected = option => frequency === option;

  return (
    <div className="px-3">
      <div className="form-group row">
        <div className="col-sm-2 text-sm-right">
          <label
            htmlFor={`${id}-frequency`}
            className="col-form-label"
          >
            <strong>
              Repeat
            </strong>
          </label>
        </div>
        <FormControl>
          <InputLabel id={`${id}-frequency-label`}>Frequency</InputLabel>
          <Select
            id={`${id}-frequency`}
            labelId={`${id}-frequency-label`}
            name="repeat.frequency"
            value={frequency}
            onChange={handleChange}
          >
            {isOptionAvailable('Yearly') && <MenuItem value="Yearly">Yearly</MenuItem>}
            {isOptionAvailable('Monthly') && <MenuItem value="Monthly">Monthly</MenuItem>}
            {isOptionAvailable('Weekly') && <MenuItem value="Weekly">Weekly</MenuItem>}
            {isOptionAvailable('Daily') && <MenuItem value="Daily">Daily</MenuItem>}
            {isOptionAvailable('Hourly') && <MenuItem value="Hourly">Hourly</MenuItem>}
          </Select>
        </FormControl>
      </div>

      {
        isOptionSelected('Yearly') &&
        <RepeatYearly
          id={`${id}-yearly`}
          yearly={yearly}
          handleChange={handleChange}
        />
      }
      {
        isOptionSelected('Monthly') &&
        <RepeatMonthly
          id={`${id}-monthly`}
          monthly={monthly}
          handleChange={handleChange}
        />
      }
      {
        isOptionSelected('Weekly') &&
        <RepeatWeekly
          id={`${id}-weekly`}
          weekly={weekly}
          handleChange={handleChange}
        />
      }
      {
        isOptionSelected('Daily') &&
        <RepeatDaily
          id={`${id}-daily`}
          daily={daily}
          handleChange={handleChange}
        />
      }
      {
        isOptionSelected('Hourly') &&
        <RepeatHourly
          id={`${id}-hourly`}
          hourly={hourly}
          handleChange={handleChange}
        />
      }
    </div>
  );
};

Repeat.propTypes = {
  id: PropTypes.string.isRequired,
  repeat: PropTypes.shape({
    frequency: PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly']).isRequired,
    yearly: PropTypes.object.isRequired,
    monthly: PropTypes.object.isRequired,
    weekly: PropTypes.object.isRequired,
    daily: PropTypes.object.isRequired,
    hourly: PropTypes.object.isRequired,
    options: PropTypes.shape({
      frequency: PropTypes.arrayOf(PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly'])),
      yearly: PropTypes.oneOf(['on', 'on the']),
      monthly: PropTypes.oneOf(['on', 'on the']),
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Repeat;
