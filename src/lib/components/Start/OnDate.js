import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/min/locales';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import { DATE_TIME_FORMAT } from '../../constants/index';
import useStyles from '../../styles';

const StartOnDate = ({
  id,
  onDate: {
    date,
  },
  handleChange,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.input}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          id={`${id}-startDate`}
          value={date}
          disableToolbar
          autoOk
          fullWidth
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          label="Start Date"
          onChange={(inputDate) => {
            const editedEvent = {
              target: {
                value: moment(inputDate).format(DATE_TIME_FORMAT),
                name: 'start.onDate.date',
              },
            };

            handleChange(editedEvent);
          }}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

StartOnDate.propTypes = {
  id: PropTypes.string.isRequired,
  onDate: PropTypes.shape({
    date: PropTypes.string.isRequired,
    options: PropTypes.shape({
      weekStartsOnSunday: PropTypes.bool,
      calendarComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default StartOnDate;
