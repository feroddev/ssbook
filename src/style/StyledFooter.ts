import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: none;
  @media (min-width: 1023px) {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #A076F2;
  height: 70px;
  width: 100vw;
  box-sizing: border-box;
  color: #fff;
  position: absolute;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: 1024px;
`;

export const FooterTextContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  color: #FFF;
  font-size: 12px;
  font-weight: 400;
`;
