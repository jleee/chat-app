import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useTheme } from '../../../contexts/ThemeContext';
import useCustomMaterialUIStyles from '../../../styles/materialUIStyle';

const ThemeDialog = ({ onClose, open }) => {
  const { themeName, updateTheme } = useTheme();
  const classes = useCustomMaterialUIStyles();
  return (
    <Dialog
      onClose={onClose}
      open={open}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="dialog-title" className={classes.dialogSpacing}>
        Select a theme
        <IconButton aria-label="close" className={classes.dialogCloseButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent id="dialog-description" className={classes.dialogSpacing}>
        <FormControl component="fieldset" margin="normal" className={classes.marginTop0}>
          <FormLabel component="legend" className={classes.formLabel}>
            Change the appearance of Slack across all of your workspaces. Choose from default Slack theme,
            light, to dark.
          </FormLabel>
          <RadioGroup aria-label="theme" name="theme" value={themeName} onChange={updateTheme}>
            <FormControlLabel
              value="defaultTheme"
              control={<Radio color="primary" />}
              label="Aubergine"
              onChange={onClose}
            />
            <FormControlLabel
              value="lightTheme"
              control={<Radio color="primary" />}
              label="Light"
              onChange={onClose}
            />
            <FormControlLabel
              value="darkTheme"
              control={<Radio color="primary" />}
              label="Dark"
              onChange={onClose}
            />
          </RadioGroup>
        </FormControl>
      </DialogContent>
    </Dialog>
  );
};

ThemeDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ThemeDialog;
