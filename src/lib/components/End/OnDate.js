import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'moment/min/locales';
import { DATE_TIME_FORMAT } from '../../constants/index';
import useStyles from '../../styles';

const EndOnDate = ({
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
          id={`${id}-endDate`}
          value={date}
          disableToolbar
          autoOk
          required
          fullWidth
          variant="inline"
          margin="normal"
          label="End Date"
          style={{ marginTop: 0 }}
          onChange={(inputDate) => {
          const editedEvent = {
            target: {
              value: moment(inputDate).format(DATE_TIME_FORMAT),
              name: 'end.onDate.date',
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

EndOnDate.propTypes = {
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

export default EndOnDate;
