import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import EndAfter from './After';
import EndOnDate from './OnDate';

const End = ({
  id,
  end: {
    mode,
    after,
    onDate,
    options,
  },
  handleChange,
}) => {
  const isOptionAvailable = option => !options.modes || options.modes.indexOf(option) !== -1;
  const isOptionSelected = option => mode === option;

  return (
    <Grid container spacing={4}>
      {/* <Grid item xs={2}>
        <Box p={2} style={{ paddingLeft: 0 }}>
          <Typography component="span">End Date</Typography>
        </Box>
      </Grid> */}
      <Grid item>
        <FormControl style={{ width: 240 }}>
          <InputLabel id={`${id}-label`}>End Date</InputLabel>
          <Select
            id={id}
            labelId={`${id}-label`}
            name="end.mode"
            value={mode}
            onChange={handleChange}
          >
            {isOptionAvailable('Never') && <MenuItem value="Never">Never</MenuItem>}
            {isOptionAvailable('After') && <MenuItem value="After">After</MenuItem>}
            {isOptionAvailable('On date') && <MenuItem value="On date">On Date</MenuItem>}
          </Select>
        </FormControl>
      </Grid>
      {
          isOptionSelected('After') &&
          <EndAfter
            id={`${id}-after`}
            after={after}
            handleChange={handleChange}
          />
        }
      {
          isOptionSelected('On date') &&
          <EndOnDate
            id={`${id}-onDate`}
            onDate={onDate}
            handleChange={handleChange}
          />
        }
    </Grid>
  );
};

End.propTypes = {
  id: PropTypes.string.isRequired,
  end: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    after: PropTypes.number.isRequired,
    onDate: PropTypes.object.isRequired,
    options: PropTypes.shape({
      modes: PropTypes.arrayOf(PropTypes.oneOf(['Never', 'After', 'On date'])),
      weekStartsOnSunday: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default End;
