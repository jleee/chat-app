import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import Filter from 'bad-words';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import LinkIcon from '@material-ui/icons/Link';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { TextArea, FormattingBar, FormattingBarLeft, FormattingBarRight } from './MessageTextArea.styles';
import { useAuth } from '../../contexts/AuthContext';
import { firestore } from '../../firebase';

const MessageTextArea = ({ channelName, channelId }) => {
  const [value, setValue] = useState('');
  const { userName, userNameAlternative } = useAuth();
  const filter = new Filter();

  const validateMessage = (val) => {
    let isValid = false;
    if (!/^\s*$/.test(val) && val) {
      isValid = true;
    }
    return isValid;
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (validateMessage(value) && channelId) {
      firestore
        .collection('channels')
        .doc(channelId)
        .collection('messages')
        .add({
          message: filter.clean(value),
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: userName || userNameAlternative,
        });
      setValue('');
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      sendMessage(e);
    }
  };

  return (
    <>
      <TextArea
        placeholder={`Send a message to #${channelName}`}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <FormattingBar>
        <FormattingBarLeft>
          <FlashOnIcon />
          <FormatBoldIcon />
          <FormatItalicIcon />
          <StrikethroughSIcon />
          <FormatListNumberedIcon />
          <FormatListBulletedIcon />
          <DeveloperModeIcon />
          <LinkIcon />
        </FormattingBarLeft>
        <FormattingBarRight>
          <TextFormatIcon />
          <AlternateEmailIcon />
          <SentimentSatisfiedOutlinedIcon />
          <AttachFileOutlinedIcon />
          <SendOutlinedIcon onClick={sendMessage} />
        </FormattingBarRight>
      </FormattingBar>
    </>
  );
};

MessageTextArea.defaultProps = {
  channelName: '',
  channelId: '',
};

MessageTextArea.propTypes = {
  channelName: PropTypes.string,
  channelId: PropTypes.string,
};

export default memo(MessageTextArea);
