import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'left',
    marginBottom: '15px',
    gap: '20px',
  },
  input: {
    width: '40%',
  },
  radio: {
    width: '15%',
  },
}));

export default useStyles;
