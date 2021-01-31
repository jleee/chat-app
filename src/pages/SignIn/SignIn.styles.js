import styled from 'styled-components';
import color from '../../styles/color';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${color.greyE};
`;

export const SlackLogo = styled.img`
  width: 140px;
  height: auto;
  margin-bottom: 2.5rem;
`;

export const GoogleLogo = styled.img`
  width: 18px;
  height: auto;
  margin-right: 0.75rem;
`;

export const SignInOptions = styled.div`
  margin: 0 auto;
  max-width: 400px;
`;

export const HorizontalDivider = styled.div`
  position: relative;
  margin: 1.5rem 0 1rem 0;
  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${color.greyD};
    transform: translateY(50%);
    z-index: 1;
  }
`;

export const HorizontalDividerText = styled.div`
  position: relative;
  display: inline;
  padding: 0 1.5rem;
  color: ${color.grey8};
  background: ${color.white};
  z-index: 2;
`;
