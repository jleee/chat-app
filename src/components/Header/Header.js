import React, { memo, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ScheduleIcon from '@material-ui/icons/Schedule';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import {
  HeaderContainer,
  HeaderLeft,
  HeaderCenter,
  HeaderRight,
  HeaderSearch,
  HeaderAvatar,
} from './Header.styles';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const prevOpen = useRef(open);
  const anchorRef = useRef(null);
  const { signOut } = useAuth();
  const history = useHistory();

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = (e) => {
    if (anchorRef.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      setOpen(false);
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut();
      history.push('/');
    } catch (error) {
      console.log(`Encountered error: ${error}`);
    }
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <HeaderContainer role="navigation">
      <HeaderLeft>
        <h1>SLACK CLONE</h1>
      </HeaderLeft>
      <HeaderCenter>
        <ScheduleIcon fontSize="small" />
        <HeaderSearch aria-label="Search">
          <SearchIcon />
          Search Personal
        </HeaderSearch>
        <HelpOutlineIcon fontSize="small" />
      </HeaderCenter>
      <HeaderRight>
        <HeaderAvatar
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <PersonIcon fontSize="large" />
        </HeaderAvatar>
      </HeaderRight>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </HeaderContainer>
  );
};

export default memo(Header);
