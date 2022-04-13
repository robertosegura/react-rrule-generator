import React from 'react';
import PropTypes from 'prop-types';
import { toPairs } from 'lodash';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

const RepeatWeekly = ({
  id,
  weekly: {
    interval,
    days,
    options,
  },
  handleChange,
}) => {
  let daysArray = toPairs(days);
  if (options.weekStartsOnSunday) {
    daysArray = daysArray.slice(-1).concat(daysArray.slice(0, -1));
  }

  return (
    <div>
      <div>
        <div>
          <TextField
            id={`${id}-interval`}
            name="repeat.weekly.interval"
            type="number"
            value={interval}
            label="Every"
            inputProps={{ min: 1 }}
            onChange={numericalFieldHandler(handleChange)}
          />
        </div>
        <div>
          <Box p={3}>
            <Typography component="span">week(s)</Typography>
          </Box>
        </div>
      </div>
      <FormGroup row>
        {daysArray.map(([dayName, isDayActive]) => (
          <FormControlLabel
            key={dayName}
            control={<Checkbox
              name={`repeat.weekly.days[${dayName}]`}
              checked={isDayActive}
              color="primary"
              onChange={(event) => {
                  const editedEvent = {
                    ...event,
                    target: {
                      ...event.target,
                      value: !isDayActive,
                      name: event.target.name,
                    },
                  };

                  handleChange(editedEvent);
                }}
            />}
            label={dayName.charAt(0).toUpperCase() + dayName.slice(1)}
          />
          ))
          }
      </FormGroup>
    </div>
  );
};

RepeatWeekly.propTypes = {
  id: PropTypes.string.isRequired,
  weekly: PropTypes.shape({
    interval: PropTypes.number.isRequired,
    days: PropTypes.shape({
      mon: PropTypes.bool.isRequired,
      tue: PropTypes.bool.isRequired,
      wed: PropTypes.bool.isRequired,
      thu: PropTypes.bool.isRequired,
      fri: PropTypes.bool.isRequired,
      sat: PropTypes.bool.isRequired,
      sun: PropTypes.bool.isRequired,
    }).isRequired,
    options: PropTypes.shape({
      weekStartsOnSunday: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RepeatWeekly;
