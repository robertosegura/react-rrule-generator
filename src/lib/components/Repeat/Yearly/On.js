import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { range } from 'lodash';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import { MONTHS } from '../../../constants/index';

const RepeatYearlyOn = ({
  id,
  mode,
  on,
  hasMoreModes,
  handleChange,
}) => {
  const daysInMonth = moment(on.month, 'MMM').daysInMonth();
  const isActive = mode === 'on';

  return (
    <Grid container spacing={1}>
      {hasMoreModes && (
        <Grid item xs={2}>
          <FormControlLabel
            id={id}
            name="repeat.yearly.mode"
            value="on"
            control={<Radio color="primary" />}
            label="on"
            checked={isActive}
            onChange={handleChange}
          />
        </Grid>
      )}
      <Grid item xs={5}>
        <FormControl style={{ width: '100%' }}>
          <InputLabel id={`${id}-month-label`}>Month</InputLabel>
          <Select
            id={`${id}-month`}
            labelId={`${id}-month-label`}
            name="repeat.yearly.on.month"
            value={on.month}
            disabled={!isActive}
            onChange={handleChange}
          >
            {MONTHS.map(month => <MenuItem key={month} value={month}>{month}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={5}>
        <FormControl style={{ width: '100%' }}>
          <InputLabel id={`${id}-day-label`}>Day</InputLabel>
          <Select
            labelId={`${id}-day-label`}
            id={`${id}-day`}
            name="repeat.yearly.on.day"
            value={on.day}
            disabled={!isActive}
            onChange={numericalFieldHandler(handleChange)}
          >
            {range(0, daysInMonth).map(i => (
              <MenuItem key={i} value={i + 1}>{i + 1}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
RepeatYearlyOn.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  on: PropTypes.shape({
    month: PropTypes.oneOf(MONTHS).isRequired,
    day: PropTypes.number.isRequired,
  }).isRequired,
  hasMoreModes: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatYearlyOn;
