import styled from 'styled-components';

export const ContainerFavoriteBook = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #555;
`;

export const Span = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #A076F2;
`;

export const FavoritesContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  overflow: scroll;
  @media (min-width: 1024px) {
    overflow: hidden;
  }
`;
