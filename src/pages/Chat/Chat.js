import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Message from '../../components/Message/Message';
import MessageTextArea from '../../components/MessageTextArea/MessageTextArea';
import {
  Container,
  ChatContainer,
  ChatHeader,
  ChatHeaderLeft,
  ChatHeaderRight,
  ChatContent,
  ChatMessageList,
  ChatMessageListItem,
  WelcomeContainer,
  WelcomeTitle,
  WelcomeSubTitle,
  ChatFooter,
} from './Chat.styles';
import { firestore } from '../../firebase';

const Chat = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [channelMessages, setChannelMessages] = useState([]);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);

  const { channelId } = useParams();
  const scrollRef = useRef();

  useEffect(() => {
    if (channelId) {
      // Set channel name and id from db
      firestore
        .collection('channels')
        .doc(channelId)
        .onSnapshot(
          (snapshot) => {
            setChannelDetails(snapshot.data());
          },
          (error) => {
            console.log(`channelDetails error: ${error}`);
          }
        );

      // Set channel messages from db
      firestore
        .collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .limitToLast(45)
        .onSnapshot(
          (snapshot) => {
            setChannelMessages(
              snapshot.docs.map((doc) => ({
                data: doc.data(),
                id: doc.id,
              }))
            );
          },
          (error) => {
            console.log(`channelMessages error: ${error}`);
          }
        );
    }
  }, [channelId]);

  useEffect(() => {
    if (isScrolledToBottom) {
      scrollRef.current.scrollIntoView({ behaviour: 'smooth', block: 'end' });
    }
  });

  const handleMessageScroll = (e) => {
    const { clientHeight, scrollTop, scrollHeight } = e.target;
    const pixelBuffer = 35;
    if (clientHeight + scrollTop > scrollHeight - pixelBuffer) {
      setIsScrolledToBottom(true);
    } else {
      setIsScrolledToBottom(false);
    }
  };

  return (
    <Container>
      <Header />
      <ChatContainer>
        <Sidebar />
        <ChatContent>
          <ChatHeader>
            <ChatHeaderLeft>
              #{channelDetails?.name}
              <StarBorderIcon />
            </ChatHeaderLeft>
            <ChatHeaderRight>
              <InfoIcon />
            </ChatHeaderRight>
          </ChatHeader>
          <ChatMessageList onScroll={handleMessageScroll}>
            {!channelId && (
              <WelcomeContainer>
                <WelcomeTitle>Welcome to Slack Clone</WelcomeTitle>
                <WelcomeSubTitle>
                  To get started, add a new channel or join an existing channel to chat!
                </WelcomeSubTitle>
              </WelcomeContainer>
            )}
            <ChatMessageListItem>
              {channelMessages.map(({ data, id }) => (
                <Message user={data.user} message={data.message} timestamp={data.timestamp} key={id} />
              ))}
            </ChatMessageListItem>
            <div ref={scrollRef} />
          </ChatMessageList>
          {channelId && (
            <ChatFooter>
              <MessageTextArea channelName={channelDetails?.name} channelId={channelId} />
            </ChatFooter>
          )}
        </ChatContent>
      </ChatContainer>
    </Container>
  );
};

export default Chat;
