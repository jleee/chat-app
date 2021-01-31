import styled from 'styled-components';

export const SidebarCloseButton = styled.button`
  position: absolute;
  right: 0.5rem;
  border: 0;
  background: none;
  color: ${(props) => props.theme.color.sidebarText};
  opacity: 0.7;
  visibility: hidden;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const SidebarItemContainer = styled.div`
  display: flex;
  position: relative;
  align-items: ${(props) => (props.iconPresent ? 'center' : '')};
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.color.sidebarText};
  &:hover {
    background: ${(props) => props.theme.color.sidebarHover};
    cursor: ${(props) => {
      if (props.hasHandler) {
        return 'pointer';
      }
      if (props.hasIcon) {
        return 'not-allowed';
      }
      return 'pointer';
    }};
  }
  &:last-child {
    margin-bottom: 2.5rem;
  }
  &:hover ${SidebarCloseButton} {
    visibility: visible;
  }
`;

export const SidebarItemLabel = styled.div`
  margin-left: 0.5rem;
`;
