import React, { memo } from 'react';
import PropTypes from 'prop-types';
import PersonIcon from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';

import { MessageContainer, MessageLeft, MessageRight, MessageInfo, MessageText } from './Message.styles';

const Message = ({ user, message, timestamp }) => {
  const date = new Date(timestamp?.seconds * 1000);
  const dateOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  const currentDate = date.toLocaleDateString(dateOptions);
  const time = date.toLocaleTimeString([], { timeStyle: 'short' });

  // Don't render anything until final timestamp value is retrieved from Firestore
  if (timestamp === null) {
    return null;
  }

  return (
    <MessageContainer>
      <MessageLeft>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </MessageLeft>
      <MessageRight>
        <strong>{user}</strong>
        <MessageInfo>
          {currentDate} {time}
        </MessageInfo>
        <MessageText>{message}</MessageText>
      </MessageRight>
    </MessageContainer>
  );
};

Message.defaultProps = {
  timestamp: 'null',
};

Message.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Object),
};

export default memo(Message);
