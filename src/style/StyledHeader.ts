import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  max-width: 1024px;
  height: 104px;
  padding: 16px 16px;
  background-color: #fff;
  z-index: 1;
  border-radius: 0px 0px 32px 0px;
  @media (min-width: 1023px) {
    height: 75px;
  }
`;

export const NameUser = styled.span`
  display: none;
  @media (min-width: 1023px) {
    display: flex;
    font-size: 14px;
    font-weight: 700;
    padding-left: 10px;
    color: #555;
  }
`;

export const LineVertical = styled.div`
  display: none;
  @media (min-width: 1023px) {
    display: flex;
    width: 1px;
    height: 40px;
    background-color: #E4E4E4;;
  }
`;

export const Icons = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin: 0 5px;
`;

export const IconDiv = styled.div`
  display: none;
  @media (min-width: 1023px) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #555555;
    cursor: pointer;
  }
`;

export const InputSearch = styled.div`
  display: none;
  @media (min-width: 1023px) {
    display: flex;
    width: 500px;
    height: 40px;
  }
`;

export const Input = styled.input`
  display: none;
  @media (min-width: 1023px) {
    display: flex;
    width: 100%;
    height: 40px;
    border: 1px solid #E4E4E4;
    border-radius: 8px;
    padding: 0 20px;
    font-size: 14px;
    font-weight: 400;
    color: #555;
    background-color: #fff;
    width: 100%;
    background: url('/search-icon.svg') no-repeat;
    background-size: 20px; 
    background-position: right 20px center; 
  }
`;

export const InfoUserContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  left: 0;
`;

export const Perfil = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-top: -57px;
  z-index: 2;
  width: 100vw;
  max-width: 1024px;
  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

export const NavButton = styled.button`
  display: flex;
  margin-left: 20px;
  align-items: center;
  background-color: transparent;
  border: none;
  height: 57px;
  font-size: 14px;
  font-weight: 700;
  padding-top: 0px;
  `;

export const NavButtonActive = styled.button`
  display: flex;
  margin-left: 20px;
  align-items: center;
  background-color: transparent;
  border: none;
  height: 57px;
  font-size: 14px;
  font-weight: 700;
  border-bottom: 3px solid #A076F2;
  padding: 13px 0 10px 0;
`;

export const NavText = styled.span`
  color: #555;
`;
