import { makeStyles } from '@material-ui/core/styles';
import color from './color';
import mediaBreakpoint from './mediaBreakpoint';

const minWidth = 'min-width';

const useCustomMaterialUIStyles = makeStyles({
  card: {
    boxShadow: 'none',
    borderRadius: '4px',
    margin: '1rem',
    textAlign: 'center',
    overflow: 'inherit',
    [`@media (${minWidth}: ${mediaBreakpoint.md})`]: {
      width: '100%',
      maxWidth: '700px',
      margin: 'auto',
    },
    boxShadow: '0px 10px 15px rgb(0 0 0 / 5%)',
  },
  cardContent: {
    padding: '4.5rem 2rem !important',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    lineHeight: '120%',
    marginBottom: '0.75rem',
    color: color.black,
  },
  subTitle: {
    fontSize: '1.1rem',
    marginBottom: '3rem',
    color: color.grey5,
  },
  formLabel: {
    fontSize: '1rem',
    lineHeight: '1.5',
    letterSpacing: '0.0093em',
    color: `rgba(0, 0, 0, 0.54) !important`,
    marginBottom: '0.75rem',
  },
  textLeft: {
    textAlign: 'left',
  },
  paddingX0: {
    paddingLeft: '0',
    paddingRight: '0',
  },
  marginTop0: {
    marginTop: '0',
  },
  marginTop1: {
    marginTop: '0.75rem',
  },
  marginTop2: {
    marginTop: '1.25rem',
  },
  marginBottom1: {
    marginBottom: '0.75rem',
  },
  dialogSpacing: {
    padding: '1rem 2rem',
  },
  dialogCloseButton: {
    position: 'absolute',
    right: '0.5rem',
    top: '0.5rem',
    color: color.grey8,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '0.5rem 1rem',
    fontSize: '1.1rem',
    fontWeight: '700',
    textTransform: 'inherit',
  },
  buttonOutline: {
    background: color.white,
    color: '#4285f4',
    border: '2px solid #4285f4',
    '&:hover': {
      background: color.white,
      boxShadow: '0 1px 6px rgb(0 0 0 / 30%)',
    },
  },
  buttonPurple: {
    color: `${color.white} !important`,
    background: color.purple,
    border: ' none',
    '&:hover': {
      background: color.purpleHover,
    },
    '&:disabled': {
      background: color.grey7,
    },
  },
  buttonGreen: {
    color: color.white,
    background: color.green,
    '&:hover': {
      background: color.greenHover,
      boxShadow: '0 1px 4px rgb(0 0 0 / 30%)',
    },
  },
});

export default useCustomMaterialUIStyles;
