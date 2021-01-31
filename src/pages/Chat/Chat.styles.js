import styled from 'styled-components';
import color from '../../styles/color';
import mediaBreakpoint from '../../styles/mediaBreakpoint';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const ChatContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  height: 64px;
  color: ${(props) => props.theme.color.chatHeader};
  border-top: 1px solid ${(props) => props.theme.color.chatDivider};
  border-bottom: 1px solid ${(props) => props.theme.color.chatDivider};
`;

export const ChatHeaderLeft = styled.div`
  display: flex;
  font-weight: 700;
  align-items: center;
  padding-right: 1rem;
  svg {
    font-size: 1rem;
    margin-left: 0.4rem;
    &:hover {
      cursor: not-allowed;
    }
  }
`;

export const ChatHeaderRight = styled.div`
  display: flex;
  font-weight: 700;
  align-items: center;
  font-size: 0.9rem;
  overflow: hidden;
  svg {
    margin-left: 1rem;
    &:hover {
      cursor: not-allowed;
    }
  }
`;

export const ChatContent = styled.div`
  background: ${(props) => props.theme.color.chatBackground};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ChatContentGettingStarted = styled.div`
  padding: 2rem;
`;

export const ChatMessageList = styled.div`
  flex: 1;
  overflow: auto;
  &:focus,
  &:hover {
    scrollbar-width: thin;
  }
  &:focus::-webkit-scrollbar,
  &:hover::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &:focus::-webkit-scrollbar-thumb,
  &:hover::-webkit-scrollbar-thumb {
    background: ${color.grey8};

    border-radius: 12px;
    border: 2px solid
      ${(props) => (props.theme.name === 'darkTheme' ? props.theme.color.chatDivider : color.white)};
  }
  &:focus::-webkit-scrollbar:vertical,
  &:hover::-webkit-scrollbar:vertical {
    width: 12px;
  }
`;

export const ChatMessageListItem = styled.div`
  display: block;
`;

export const ChatDivider = styled.div`
  position: relative;
  text-align: center;
  margin: 1rem 0;
  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.color.chatDivider};
    transform: translateY(50%);
    z-index: -1;
  }
`;

export const ChatDividerLabel = styled.div`
  display: inline-block;
  font-size: 0.825rem;
  font-weight: 700;
  padding: 0.35rem 1rem;
  border-radius: 1rem;
  background: ${color.white};
  border: 1px solid ${(props) => props.theme.color.chatDivider};
`;

export const ChatFooter = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.color.chatTextAreaBorder};
  border-radius: 4px;
  min-height: 50px;
  height: 85px;
  margin: 1rem 1rem 3.5rem 1rem;
  background: ${(props) => props.theme.color.chatTextArea};
  overflow: hidden;
  &:focus-within > div {
    transition: opacity 0.2s, background-color 0.2s, color 0.2s;
    background: ${(props) => props.theme.color.chatFormattingBarBackground};
    border-top: 1px solid ${(props) => props.theme.color.chatFormattingBarBorder};
    opacity: 1;
  }
`;

export const WelcomeContainer = styled.div`
  text-align: center;
  padding: 3rem 1rem;
`;

export const WelcomeTitle = styled.h2`
  font-weight: bold;
  font-size: 3em;
  color: ${(props) => props.theme.color.chatHeader};
  margin-bottom: 0.75rem;
  letter-spacing: -0.05rem;
  line-height: 100%;
  @media (min-width: ${mediaBreakpoint.lg}) {
    font-size: 4em;
  }
`;

export const WelcomeSubTitle = styled.p`
  font-size: 1rem;
  line-height: 120%;
  color: ${(props) => props.theme.color.chatHeader};
  @media (min-width: ${mediaBreakpoint.lg}) {
    font-size: 1.25rem;
  }
`;
