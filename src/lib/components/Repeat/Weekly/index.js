import React from 'react';
import PropTypes from 'prop-types';
import { toPairs } from 'lodash';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';

import numericalFieldHandler from '../../../utils/numericalFieldHandler';
// import translateLabel from '../../../utils/translateLabel';

const RepeatWeekly = ({
  id,
  weekly: {
    interval,
    days,
    options,
  },
  handleChange,
  // translations,
}) => {
  let daysArray = toPairs(days);
  if (options.weekStartsOnSunday) {
    daysArray = daysArray.slice(-1).concat(daysArray.slice(0, -1));
  }

  return (
    <div className="px-3">
      <div className="form-group row d-flex align-items-sm-center">
        <div className="col-sm-1 offset-sm-2">
          every
        </div>
        {/* <div className="col-sm-3">
          <input
            id={`${id}-interval`}
            name="repeat.weekly.interval"
            aria-label="Repeat weekly interval"
            className="form-control"
            value={interval}
            onChange={numericalFieldHandler(handleChange)}
          />
        </div> */}
        <TextField
          name="repeat.weekly.interval"
          required
          type="number"
          value={interval}
          label="Every"
          // id="zipcode"
          inputProps={{ min: 1 }}
          onChange={numericalFieldHandler(handleChange)}
        />
        <div className="col-sm-1">
          weeks
        </div>
      </div>

      {/* <div className="form-group row">
        <div className="btn-group btn-group-toggle offset-sm-2">
          {daysArray.map(([dayName, isDayActive]) => (
            <label
              htmlFor={`${id}-${dayName}`}
              key={dayName}
              className={`btn btn-primary ${isDayActive ? 'active' : ''}`}
            >
              <input
                type="checkbox"
                id={`${id}-${dayName}`}
                name={`repeat.weekly.days[${dayName}]`}
                className="form-control"
                checked={isDayActive}
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
              />
              {translateLabel(translations, `days_short.${dayName.toLowerCase()}`)}
            </label>))
          }
        </div>
      </div> */}
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
          // <label
          //   htmlFor={`${id}-${dayName}`}
          //   key={dayName}
          //   className={`btn btn-primary ${isDayActive ? 'active' : ''}`}
          // >
          //   <input
          //     type="checkbox"
          //     id={`${id}-${dayName}`}
          //     name={`repeat.weekly.days[${dayName}]`}
          //     className="form-control"
          //     checked={isDayActive}
          //     onChange={(event) => {
          //         const editedEvent = {
          //           ...event,
          //           target: {
          //             ...event.target,
          //             value: !isDayActive,
          //             name: event.target.name,
          //           },
          //         };

          //         handleChange(editedEvent);
          //       }}
          //   />
          //   {translateLabel(translations, `days_short.${dayName.toLowerCase()}`)}
          // </label>
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
  // translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RepeatWeekly;
