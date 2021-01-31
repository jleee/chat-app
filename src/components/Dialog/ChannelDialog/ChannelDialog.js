import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useCustomMaterialUIStyles from '../../../styles/materialUIStyle';
import { firestore } from '../../../firebase';

const ChannelDialog = ({ onClose, open }) => {
  const [error, setError] = useState(false);
  const [channelName, setChannelName] = useState('');
  const classes = useCustomMaterialUIStyles();
  const history = useHistory();

  const createChannel = () => {
    if (channelName) {
      firestore
        .collection('channels')
        .add({
          name: channelName,
        })
        .then((docRef) => {
          history.push(`/channel/${docRef.id}`);
        })
        .catch((err) => console.log(`channelName add error: ${err}`));
      onClose();
      setChannelName('');
      setError(false);
    }
  };

  const handleOnChange = (e) => {
    let str = e.target.value;
    if (str) {
      setError(false);
    } else {
      setError(true);
    }
    str = str.replace(/\s+/g, '-').toLowerCase();
    setChannelName(str);
  };

  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) createChannel();
  };

  return (
    <Dialog
      onClose={() => {
        onClose();
        setError(false);
      }}
      open={open}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle className={classes.dialogSpacing}>
        Create a channel
        <IconButton
          id="dialog-title"
          aria-label="close"
          className={classes.dialogCloseButton}
          onClick={() => {
            onClose();
            setError(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogSpacing}>
        <DialogContentText id="dialog-description">
          Channels are where your team communicates. They’re best when organized around a topic — #marketing,
          for example.
        </DialogContentText>
        <TextField
          id="name"
          label="Name"
          type="text"
          variant="outlined"
          margin="normal"
          placeholder="e.g. plan-budget"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ maxLength: 80 }}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          value={channelName}
          helperText={error && 'Channel name must be greater than one character'}
          error={error}
          fullWidth
        />
      </DialogContent>
      <DialogContent dividers className={classes.dialogSpacing}>
        <DialogActions className={classes.paddingX0}>
          <Button
            onClick={createChannel}
            variant="contained"
            className={channelName.length > 0 && classes.buttonGreen}
          >
            Create
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

ChannelDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ChannelDialog;
