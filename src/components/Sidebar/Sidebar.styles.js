import styled from 'styled-components';
import mediaBreakpoint from '../../styles/mediaBreakpoint';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  background: ${(props) => props.theme.color.sidebarBackground};
  color: ${(props) => props.theme.color.sidebarText};
  border-right: 1px solid ${(props) => props.theme.color.sidebarDivider};
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  width: 200px;
  @media (min-width: ${mediaBreakpoint.sm}) {
    width: 260px;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  font-size: 0.925rem;
  border-top: 1px solid ${(props) => props.theme.color.sidebarDivider};
  border-bottom: 1px solid ${(props) => props.theme.color.sidebarDivider};
  color: ${(props) => props.theme.color.sidebarHeaderText};
  background: ${(props) => props.theme.color.sidebarHeaderBackground};
  word-break: break-word;
  &:hover {
    background: ${(props) => props.theme.color.sidebarHover};
  }
`;

export const SidebarCreate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.sidebarHeaderIcon};
  background: ${(props) => props.theme.color.sidebarHeaderIconBackground};
  max-width: 36px;
  width: 100%;
  height: 36px;
  border-radius: 100%;
  &:hover {
    cursor: not-allowed;
  }
`;

export const SidebarList = styled.div`
  padding: 1rem 0;
`;

export const SidebarDivider = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 1px;
  width: 100%;
  border: none;
  background: ${(props) => props.theme.color.sidebarDivider};
`;
