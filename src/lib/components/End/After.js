import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import numericalFieldHandler from '../../utils/numericalFieldHandler';
import useStyles from '../../styles';

const EndAfter = ({
  id,
  after,
  handleChange,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.input}>
      <TextField
        id={id}
        name="end.after"
        type="number"
        value={after}
        label="Executions"
        inputProps={{ min: 1 }}
        onChange={numericalFieldHandler(handleChange)}
        fullWidth
      />
    </div>
  );
};

EndAfter.propTypes = {
  id: PropTypes.string.isRequired,
  after: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EndAfter;
