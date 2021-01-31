import styled from 'styled-components';
import color from '../../styles/color';

export const MessageContainer = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.color.chatText};
  white-space: pre-wrap;
  &:hover {
    background: ${(props) => props.theme.color.chatMessageHover};
  }
`;

export const MessageLeft = styled.div`
  display: block;
  margin-right: 0.5rem;
`;

export const MessageRight = styled.div`
  strong {
    margin-right: 0.5rem;
  }
`;

export const MessageInfo = styled.div`
  display: inline-flex;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${color.grey7};
`;

export const MessageText = styled.div`
  margin-top: 0.25rem;
`;
