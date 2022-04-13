import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import numericalFieldHandler from '../../utils/numericalFieldHandler';

const EndAfter = ({
  id,
  after,
  handleChange,
}) => (
  <Grid item>
    <TextField
      id={id}
      name="end.after"
      type="number"
      value={after}
      label="Executions"
      inputProps={{ min: 1 }}
      onChange={numericalFieldHandler(handleChange)}
      style={{ width: 100 }}
    />
  </Grid>
);

EndAfter.propTypes = {
  id: PropTypes.string.isRequired,
  after: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EndAfter;
