import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px 0',
  },
  input: {
    width: '40%',
  },
  radio: {
    width: '15%',
  },
}));

export default useStyles;
