import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

import numericalFieldHandler from '../../utils/numericalFieldHandler';
// import translateLabel from '../../utils/translateLabel';

const EndAfter = ({
  id,
  after,
  handleChange,
  // translations
}) => (
  <div className="col-sm-4">
    <div className="form-group m-0 row d-flex align-items-center">
      {/* <div className="col-3 col-sm-6 pl-0">
        <input
          id={id}
          name="end.after"
          aria-label="End after"
          className="form-control"
          value={after}
          onChange={numericalFieldHandler(handleChange)}
        />
      </div> */}
      <TextField
        name="end.after"
        type="number"
        value={after}
        label="End After"
        // id="zipcode"
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
  // translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default EndAfter;
