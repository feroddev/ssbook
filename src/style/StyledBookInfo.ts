import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

export const TopBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 50vw;
  height: 104px;
  background-color: #fff;
  @media (min-width: 1023px) {
    height: 75px;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: space-between;
  padding: 30px;
  align-items: flex-start;
  z-index: 1;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Fade = styled.div`
  position: absolute;
  width: 100%;
  height: 50vh;
  z-index: 1;
  background-image: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 50%);
  opacity: 0.9;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const IconsMenu = styled.img`
  width: 25px;
  height: 25px;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Cover = styled.img`
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  z-index: 0;
  @media (min-width: 1024px) {
    position: relative;
    width: 300px;
    border-radius: 8px;
  }
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const TextIcon = styled.span`
  color: #555;
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
`;

export const IconOptions = styled.section`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    width: fit-content;
    cursor: pointer;
  }
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fff;
  padding: 30px 20px 50px 20px;
  border-radius: 32px 0px 0px 0px;
  margin: 55vh 0 56px 0;
  max-width: 1024px;
  min-height: 58vh;
  z-index: 1;
  @media (min-width: 1024px) {
    padding-left: 360px;
    margin: 0;
    padding-top: 10px;
    min-height: 70vh;
  }
`;

export const TitleDesktop = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 30px 0 0 380px;
    height: 170px;
  }
`;

type SideBarProps = {
  bodyHeight: string;
};

export const SideBar = styled.div<SideBarProps>`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    background-color: #fff;
    width: 50vw;
    position: absolute;
    right: 0;
    bottom: calc(100vh - ${(props) => props.bodyHeight});
    height: calc(${(props) => props.bodyHeight} - 245px);
    z-index: 0;
    overflow: hidden;
  }
`;

export const FavoriteButton = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Title = styled.h1`
  color: #555;
  font-size: 20px;
  font-weight: 700;
  @media (min-width: 1024px) {
    font-size: 34px;
    width: 650px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #555;
  }
`;

export const Author = styled.h2`
  color: #555;
  font-size: 14px;
  font-weight: 400;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const TitleAndSubtitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  color: #555;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  margin-top: 20px;
  @media (min-width: 1024px) {
    margin-left: 25px;
  }
`;

export const ContainerCover = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: 1024px) {
    width: 400px;
    position: absolute;
    top: 96px;
    left: calc(50vw - 480px);
    z-index: 10;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
  }
`;

export const AuthorDesktop = styled.h2`
  color: #757575;
  font-size: 24px;
  font-weight: 400;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;
