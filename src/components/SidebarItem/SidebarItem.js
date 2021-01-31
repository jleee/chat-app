import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import { SidebarItemContainer, SidebarItemLabel, SidebarCloseButton } from './SidebarItem.styles';

const SidebarItem = ({ Icon, name, id, handler, deleteHandler }) => {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/channel/${id}`);
    }
  };

  return (
    <SidebarItemContainer hasIcon={Icon} hasHandler={handler} onClick={handler || selectChannel}>
      {Icon && <Icon fontSize="small" />}
      {!Icon && (
        <Box display="inline-block" pl="1rem">
          #
        </Box>
      )}
      <SidebarItemLabel>{name}</SidebarItemLabel>
      {id && (
        <SidebarCloseButton onClick={deleteHandler}>
          <CloseIcon fontSize="small" />
        </SidebarCloseButton>
      )}
    </SidebarItemContainer>
  );
};

SidebarItem.defaultProps = {
  Icon: '',
  name: '',
  id: '',
  handler: null,
  deleteHandler: null,
};

SidebarItem.propTypes = {
  Icon: PropTypes.elementType,
  name: PropTypes.string,
  id: PropTypes.string,
  handler: PropTypes.func,
  deleteHandler: PropTypes.func,
};

export default memo(SidebarItem);
