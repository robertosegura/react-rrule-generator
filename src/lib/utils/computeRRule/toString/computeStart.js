import moment from 'moment';

const computeStart = ({ onDate: { date } }) => {
  // verify that incoming date is valid
  // by seeing if it can be converted into a moment object.
  // if not, then create a new date
  let newDate = date;
  if (!moment.isMoment(moment(newDate))) {
    newDate = new Date().setMilliseconds(0);
  }

  return {
    dtstart: moment(newDate).toDate(),
  };
};

export default computeStart;
