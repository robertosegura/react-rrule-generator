import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import useStyles from '../../../styles';

const RepeatMonthlyOn = ({
  id,
  mode,
  on,
  hasMoreModes,
  handleChange,
}) => {
  const classes = useStyles();
  const isActive = mode === 'on';

  return (
    <div className={classes.container}>
      {hasMoreModes && (
      <div className={classes.radio}>
        <FormControlLabel
          id={id}
          name="repeat.monthly.mode"
          value="on"
          control={<Radio color="primary" />}
          label="on day"
          checked={isActive}
          onChange={handleChange}
        />
      </div>
        )}
      <div className={classes.input}>
        <FormControl fullWidth>
          <InputLabel id={`${id}-day-label`}>Day</InputLabel>
          <Select
            id={`${id}-day`}
            labelId={`${id}-day-label`}
            name="repeat.monthly.on.day"
            value={on.day}
            disabled={!isActive}
            onChange={numericalFieldHandler(handleChange)}
          >
            {[...new Array(31)].map((day, i) =>
              <MenuItem key={`repeat-montly-day-${i + 1}`} value={i + 1}>{i + 1}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
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
};

export default RepeatMonthlyOn;
