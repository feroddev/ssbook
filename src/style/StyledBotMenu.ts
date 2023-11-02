import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 56px;
  position: fixed;
  background-color: #fff;
  bottom: 0;
  z-index: 10;
  font-size: 12px;
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.1);
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #9E9E9E;
  cursor: pointer;
`;

export const ActiveIcon = styled(Icon)`
  color: #A076F2;
`;
