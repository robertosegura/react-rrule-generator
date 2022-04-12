import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import numericalFieldHandler from '../../utils/numericalFieldHandler';

const EndAfter = ({
  id,
  after,
  handleChange,
}) => (
  <div className="col-sm-4">
    <div className="form-group m-0 row d-flex align-items-center">
      <TextField
        id={id}
        name="end.after"
        type="number"
        value={after}
        label="End After"
        inputProps={{ min: 1 }}
        onChange={numericalFieldHandler(handleChange)}
      />
      <div className="col-9 col-sm-6">
        Executions
      </div>
    </div>
  </div>
);

EndAfter.propTypes = {
  id: PropTypes.string.isRequired,
  after: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EndAfter;
