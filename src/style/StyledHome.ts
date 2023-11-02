import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
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

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1024px;
`;

export const CarouselFavorite = styled.section`
  display: flex;
  flex-direction: row;
  padding: 20px;
  overflow: hidden;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.05);
  padding: 30px 20px 50px 30px;
  border-radius: 32px 0px 0px 0px;
  z-index: 0;
  @media (min-width: 1024px) {
    padding: 30px 20px 0 30px;
  }
`;

export const Loading = styled.p`
  height: 100vh;
  text-align: center;
`;

export const FavoriteBooks = styled.div`
  width: 100vw;
  background-color: #f7f7f7;
  overflow: hidden;
  max-width: 1024px;
`;

export const LibraryContainer = styled.div`
  display: flex;
  overflow: scroll;
  margin-bottom: 50px;
`;

type BarActorsProps = {
  bodyHeight: string;
};

export const BarActors = styled.div<BarActorsProps>`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    background-color: #fff;
    width: 50vw;
    position: absolute;
    right: 0;
    bottom: calc(100vh - ${(props) => props.bodyHeight});
    height: calc(${(props) => props.bodyHeight} - 478px);
    z-index: -1;
    overflow: hidden;
  }
`;
