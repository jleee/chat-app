import React, { useState, useEffect, memo } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import CreateIcon from '@material-ui/icons/Create';
import NotesIcon from '@material-ui/icons/Notes';
import MessageIcon from '@material-ui/icons/Message';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactsIcon from '@material-ui/icons/Contacts';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';

import ChannelDialog from '../Dialog/ChannelDialog/ChannelDialog';
import ThemeDialog from '../Dialog/ThemeDialog/ThemeDialog';
import SidebarItem from '../SidebarItem/SidebarItem';
import {
  SidebarContainer,
  SidebarHeader,
  SidebarList,
  SidebarCreate,
  SidebarDivider,
} from './Sidebar.styles';

import { firestore } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar = () => {
  const [channels, setChannels] = useState([]);
  const [channelDialogOpen, setChannelDialogOpen] = useState(false);
  const [themeDialogOpen, setThemeDialogOpen] = useState(false);
  const { userName, userNameAlternative } = useAuth();
  const history = useHistory();

  useEffect(() => {
    firestore
      .collection('channels')
      .orderBy('name')
      .onSnapshot(
        (snapshot) => {
          setChannels(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              name: doc.data().name,
            }))
          );
        },
        (error) => {
          console.log(`Encountered error: ${error}`);
        }
      );
  }, []);

  const handleDialogClose = (callback) => {
    callback(false);
  };

  const handleDialogOpen = (callback) => {
    callback(true);
  };

  const deleteChannel = (id) => {
    firestore
      .collection('channels')
      .doc(id)
      .delete()
      .then(() => history.push('/channel'));
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <Box display="inline-block" fontWeight={700} pr="1rem">
          {userName || userNameAlternative} (you)
          <Box display="inline-block" fontWeight={300} pl="0.5rem" />
        </Box>
        <SidebarCreate>
          <CreateIcon fontSize="small" />
        </SidebarCreate>
      </SidebarHeader>
      <SidebarList>
        <SidebarItem Icon={NotesIcon} name="All unreads" />
        <SidebarItem Icon={MessageIcon} name="All DMs" />
        <SidebarItem Icon={AlternateEmailIcon} name="Mentions & reactions" />
        <SidebarItem Icon={BookmarkIcon} name="Saved items" />
        <SidebarItem Icon={YoutubeSearchedForIcon} name="Channel browser" />
        <SidebarItem Icon={DescriptionIcon} name="File browser" />
        <SidebarItem Icon={ContactsIcon} name="People & user groups" />
        <SidebarItem Icon={AppsIcon} name="Apps" />
        <SidebarDivider />
        <SidebarItem
          Icon={AddIcon}
          name="Change theme"
          handler={() => handleDialogOpen(setThemeDialogOpen)}
        />
        <SidebarItem
          Icon={AddIcon}
          name="Add channel"
          handler={() => handleDialogOpen(setChannelDialogOpen)}
        />
        <SidebarDivider />
        <SidebarItem Icon={ArrowDropDownIcon} name="Channels" />
        {channels.map(({ name, id }) => (
          <SidebarItem
            name={name}
            id={id}
            key={id}
            deleteHandler={() => {
              deleteChannel(id);
            }}
          />
        ))}
        <ChannelDialog open={channelDialogOpen} onClose={() => handleDialogClose(setChannelDialogOpen)} />
        <ThemeDialog open={themeDialogOpen} onClose={() => handleDialogClose(setThemeDialogOpen)} />
      </SidebarList>
    </SidebarContainer>
  );
};

export default memo(Sidebar);
