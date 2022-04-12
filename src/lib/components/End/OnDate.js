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
  // const CustomCalendar = options.calendarComponent;

  // const locale = options.weekStartsOnSunday ? 'en-ca' : 'en-gb';
  // const calendarAttributes = {
  //   'aria-label': translateLabel(translations, 'end.tooltip'),
  //   value: date,
  //   dateFormat: DATE_TIME_FORMAT,
  //   locale,
  //   readOnly: true,
  // };

  (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        id={`${id}-endDate`}
        value={date}
        disableToolbar
        autoOk
        required
        variant="inline"
        // format="MM/dd/yyyy"
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
        // minDate={activeDate ? null : new Date()}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  )


  // return (
  //   <div className="col-6 col-sm-3">
  //     {
  //       CustomCalendar
  //         ? <CustomCalendar
  //           key={`${id}-calendar`}
  //           {...calendarAttributes}
  //           onChange={(event) => {
  //             const editedEvent = {
  //               target: {
  //                 value: event.target.value,
  //                 name: 'end.onDate.date',
  //               },
  //             };

  //             handleChange(editedEvent);
  //           }}
  //         />
  //         : <DateTime
  //           {...calendarAttributes}
  //           inputProps={
  //             {
  //               id: `${id}-datetime`,
  //               name: 'end.onDate.date',
  //               readOnly: true,
  //             }
  //           }
  //           locale={translateLabel(translations, 'locale')}
  //           timeFormat={false}
  //           viewMode="days"
  //           closeOnSelect
  //           closeOnTab
  //           required
  //           onChange={(inputDate) => {
  //             const editedEvent = {
  //               target: {
  //                 value: moment(inputDate).format(DATE_TIME_FORMAT),
  //                 name: 'end.onDate.date',
  //               },
  //             };

  //             handleChange(editedEvent);
  //           }}
  //         />
  //     }
  //   </div>
  // );
;

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
