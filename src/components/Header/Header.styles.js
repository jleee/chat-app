import styled from 'styled-components';
import color from '../../styles/color';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
  padding: 0 1rem;
  background: ${(props) => props.theme.color.headerBackground};
  color: ${(props) => props.theme.color.headerText};
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex: 1;
  min-width: 106px;
  font-weight: 900;

  h1 {
    font-size: 1rem;
    font-weight: 900;
  }
`;

export const HeaderCenter = styled.div`
  display: flex;
  max-width: 575px;
  width: 100%;
  padding: 0 1rem;
  align-items: center;
  cursor: not-allowed;
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  min-width: 40px;
  position: relative;
`;

export const HeaderSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.color.headerSearchBackground};
  box-shadow: inset 0 0 0 1px ${(props) => props.theme.color.headerSearch};
  font-size: 0.825rem;
  max-width: 500px;
  width: 100%;
  height: 24px;
  padding: 0 1rem;
  margin: 0 1rem;
  border-radius: 5px;
  &:hover {
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.color.headerSearchHover};
  }
  svg {
    font-size: 1.1rem;
    margin-right: 0.5rem;
  }
`;

export const HeaderAvatar = styled.div`
  &::before {
    position: absolute;
    content: '';
    right: -1px;
    bottom: 1px;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background: ${(props) => props.theme.color.presenceActive};
    border: 2px solid ${color.white};
  }
  svg {
    display: flex;
    border-radius: 4px;
    &:hover {
      background: ${(props) => props.theme.color.headerAvatarHover};
      cursor: pointer;
    }
  }
`;
