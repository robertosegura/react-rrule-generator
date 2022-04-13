import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'moment/min/locales';
import { DATE_TIME_FORMAT } from '../../constants/index';

const EndOnDate = ({
  id,
  onDate: {
    date,
  },
  handleChange,
}) =>
  (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        id={`${id}-endDate`}
        value={date}
        disableToolbar
        autoOk
        required
        variant="inline"
        margin="normal"
        label="End Date"
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
  );

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
