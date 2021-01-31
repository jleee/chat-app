import styled from 'styled-components';
import color from '../../styles/color';
import mediaBreakpoint from '../../styles/mediaBreakpoint';

export const TextArea = styled.textarea`
  flex: 1;
  font-size: 1.2rem;
  resize: none;
  height: auto;
  overflow: hidden;
  padding: 0.5rem;
  color: ${(props) => props.theme.color.chatText};
  background: ${(props) => props.theme.color.chatTextArea};
  border: 0;
  outline: none;
  @media (min-width: ${mediaBreakpoint.sm}) {
    padding: 0.75rem;
  }
`;

export const FormattingBar = styled.div`
  padding: 0 0.5rem;
  height: 40px;
  border-top: 1px solid transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.3;
  > div {
    display: flex;
  }
  svg {
    width: 30px;
    height: 30px;
    padding: 0.3rem;
    margin: 0 0.25rem;
    color: ${(props) => props.theme.color.chatFormattingBarIcon};
    &:hover {
      cursor: not-allowed;
    }
  }
`;

export const FormattingBarLeft = styled.div`
  svg {
    &:first-child {
      width: 35px;
      border-right: 1px solid #ccc;
      margin-left: 0;
      margin-right: 0.25rem;
      padding-right: 0.5rem;
    }
    @media (max-width: ${mediaBreakpoint.md}) {
      display: none;
    }
  }
`;
export const FormattingBarRight = styled.div`
  svg {
    @media (max-width: ${mediaBreakpoint.md}) {
      &:not(:last-child) {
        display: none;
      }
    }
    &:last-child {
      &:hover,
      &:active {
        border-radius: 2px;
        color: ${color.white};
        background: ${(props) => props.theme.color.presenceActive};
        cursor: pointer;
      }
    }
  }
`;
